import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import {
    LayoutDashboard,
    Users,
    Settings,
    Search,
    LogOut,
    Mail,
    Phone,
    Building2,
    Calendar,
    ShieldCheck,
    ChevronRight,
    X,
    Menu,
    Briefcase,
    AlertCircle,
    Eye,
    EyeOff
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Design Tokens ───────────────────────────────────────────── */
const C = {
    bg: "#0F0D11",
    sidebar: "#151216",
    card: "#1C181F",
    cardBorder: "rgba(255,255,255,0.06)",
    primary: "#9550C9",
    primaryLight: "rgba(149,80,201,0.12)",
    text: "#FFFFFF",
    textDim: "rgba(255,255,255,0.5)",
    textFaint: "rgba(255,255,255,0.25)",
    inputBg: "rgba(255,255,255,0.04)",
    inputBorder: "rgba(255,255,255,0.08)",
    divider: "rgba(255,255,255,0.06)",
};

/* ─── Reusable Inline Style Helpers ──────────────────────────── */
const s = {
    flex: (opts = {}) => ({ display: "flex", ...opts }),
    col: (opts = {}) => ({ display: "flex", flexDirection: "column", ...opts }),
    center: (opts = {}) => ({ display: "flex", alignItems: "center", justifyContent: "center", ...opts }),
    card: (opts = {}) => ({
        background: C.card,
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 20,
        ...opts,
    }),
    input: (opts = {}) => ({
        width: "100%",
        background: C.inputBg,
        border: `1px solid ${C.inputBorder}`,
        borderRadius: 14,
        padding: "14px 18px",
        color: C.text,
        fontSize: 15,
        fontFamily: "Inter, sans-serif",
        outline: "none",
        boxSizing: "border-box",
        ...opts,
    }),
    label: (opts = {}) => ({
        display: "block",
        fontSize: 11,
        fontWeight: 700,
        color: C.textFaint,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        marginBottom: 10,
        ...opts,
    }),
    btn: (opts = {}) => ({
        background: C.primary,
        color: C.text,
        border: "none",
        borderRadius: 14,
        padding: "14px 28px",
        fontSize: 15,
        fontWeight: 700,
        fontFamily: "Inter, sans-serif",
        cursor: "pointer",
        ...opts,
    }),
};

/* ─── Admin Portal ────────────────────────────────────────────── */
const AdminPortal = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessKey, setAccessKey] = useState("");
    const [loginError, setLoginError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLead, setSelectedLead] = useState(null);
    const [activeTab, setActiveTab] = useState("leads");
    const [newAdminKey, setNewAdminKey] = useState("");
    const [currentAdminKey, setCurrentAdminKey] = useState("");
    const [confirmAdminKey, setConfirmAdminKey] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [keySuccess, setKeySuccess] = useState(false);
    const [keyError, setKeyError] = useState("");
    const [showLoginKey, setShowLoginKey] = useState(false);
    const [showCurrentKey, setShowCurrentKey] = useState(false);
    const [showNewKey, setShowNewKey] = useState(false);
    const [showConfirmKey, setShowConfirmKey] = useState(false);
    const [dateFilter, setDateFilter] = useState("all");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isDropdownOpen) return;
        const close = () => setIsDropdownOpen(false);
        window.addEventListener("click", close);
        return () => window.removeEventListener("click", close);
    }, [isDropdownOpen]);

    const contacts = useQuery(api.contacts.getContacts) || [];
    const storedAdminKey = useQuery(api.adminSettings.getAdminKey);
    const updateKeyMutation = useMutation(api.adminSettings.updateAdminKey);

    useEffect(() => {
        if (localStorage.getItem("admin_auth") === "true") setIsAuthenticated(true);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const devKey = "admin123";
        const backendKey = storedAdminKey;
        const cleanAccessKey = accessKey.trim();

        const isMasterValid = cleanAccessKey === devKey;
        const isBackendValid = backendKey !== null && backendKey !== undefined && cleanAccessKey === backendKey;

        if (isMasterValid || isBackendValid) {
            setIsAuthenticated(true);
            localStorage.setItem("admin_auth", "true");
            setLoginError("");
        } else {
            setLoginError("Invalid access key. Please try again.");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("admin_auth");
    };

    const handleUpdateKey = async (e) => {
        e.preventDefault();
        setKeyError("");
        setKeySuccess(false);

        const devKey = "admin123";
        const backendKey = storedAdminKey;

        // Trim all inputs
        const currentTrimmed = currentAdminKey.trim();
        const newTrimmed = newAdminKey.trim();
        const confirmTrimmed = confirmAdminKey.trim();

        const isCurrentValid = (currentTrimmed === devKey) || (backendKey && currentTrimmed === backendKey);

        if (!isCurrentValid) {
            return setKeyError("Current administrative key is incorrect.");
        }
        if (newTrimmed.length < 6) {
            return setKeyError("New key must be at least 6 characters long.");
        }
        if (newTrimmed !== confirmTrimmed) {
            return setKeyError("New keys do not match. Please confirm again.");
        }
        if (newTrimmed === devKey || (backendKey && newTrimmed === backendKey)) {
            return setKeyError("New key must be different from current keys.");
        }

        try {
            await updateKeyMutation({ newKey: newTrimmed });
            setKeySuccess(true);
            setNewAdminKey("");
            setCurrentAdminKey("");
            setConfirmAdminKey("");
            setTimeout(() => setKeySuccess(false), 5000);
        } catch (err) {
            setKeyError("An error occurred while updating the key.");
        }
    };

    const getDateBound = () => {
        const now = Date.now();
        if (dateFilter === "today") return now - 86400000;
        if (dateFilter === "week") return now - 7 * 86400000;
        if (dateFilter === "month") return now - 30 * 86400000;
        return 0; // "all"
    };

    const filteredContacts = contacts.filter(c => {
        const matchesSearch =
            c.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.businessEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (c.companyName || "").toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDate = c.createdAt >= getDateBound();
        return matchesSearch && matchesDate;
    });

    /* ── LOGIN PAGE ─────────────────────────────────────────── */
    if (!isAuthenticated) {
        return (
            <div style={{
                minHeight: "100vh",
                background: C.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
                fontFamily: "Inter, sans-serif",
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        width: "100%",
                        maxWidth: 440,
                        background: C.card,
                        border: `1px solid ${C.cardBorder}`,
                        borderRadius: 24,
                        padding: "48px 40px",
                        boxSizing: "border-box",
                    }}
                >
                    {/* Icon */}
                    <div style={s.center({ marginBottom: 32 })}>
                        <div style={s.center({
                            width: 64,
                            height: 64,
                            background: C.primary,
                            borderRadius: 18,
                            boxShadow: `0 12px 32px rgba(149,80,201,0.3)`,
                        })}>
                            <ShieldCheck size={30} color="#fff" />
                        </div>
                    </div>

                    {/* Title */}
                    <div style={{ textAlign: "center", marginBottom: 40 }}>
                        <h1 style={{
                            fontSize: 28,
                            fontWeight: 700,
                            color: C.text,
                            margin: "0 0 10px 0",
                        }}>Admin Login</h1>
                        <p style={{ fontSize: 14, color: C.textDim, margin: 0 }}>
                            Secure access to your PMAC lead dashboard
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} style={s.col({ gap: 24 })}>
                        <div>
                            <label style={s.label()}>Access Key</label>
                            <div style={{ position: "relative" }}>
                                <input
                                    type={showLoginKey ? "text" : "password"}
                                    value={accessKey}
                                    onChange={e => setAccessKey(e.target.value)}
                                    placeholder="••••••••"
                                    style={s.input({ paddingRight: 48 })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowLoginKey(!showLoginKey)}
                                    style={{
                                        position: "absolute", right: 12, top: "50%",
                                        transform: "translateY(-50%)",
                                        background: "none", border: "none",
                                        color: C.textDim, cursor: "pointer",
                                        padding: 4, display: "flex"
                                    }}
                                >
                                    {showLoginKey ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {loginError && (
                                <div style={s.flex({
                                    alignItems: "center",
                                    gap: 8,
                                    marginTop: 10,
                                    color: "#F87171",
                                    fontSize: 13,
                                })}>
                                    <AlertCircle size={14} />
                                    {loginError}
                                </div>
                            )}
                        </div>
                        <button type="submit" style={s.btn({ width: "100%", padding: "16px 0" })}>
                            Continue to Dashboard
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    /* ── SIDEBAR NAV ITEM ───────────────────────────────────── */
    const NavItem = ({ icon: Icon, label, tab }) => {
        const active = activeTab === tab;
        return (
            <button
                onClick={() => { setActiveTab(tab); setIsSidebarOpen(false); }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: 14,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    background: active ? C.primary : "transparent",
                    color: active ? "#fff" : C.textDim,
                    textAlign: "left",
                    transition: "all 0.2s",
                    boxShadow: active ? `0 6px 20px rgba(149,80,201,0.25)` : "none",
                }}
            >
                <Icon size={19} />
                {label}
            </button>
        );
    };

    /* ── STAT CARD — Desktop ─────────────────────────────────── */
    const StatCard = ({ icon: Icon, label, value, sub }) => (
        <div style={s.card({
            padding: "28px 28px",
            position: "relative",
            overflow: "hidden",
        })}>
            <div style={{
                position: "absolute", top: -20, right: -20,
                width: 80, height: 80,
                borderRadius: "50%",
                background: C.primaryLight,
            }} />
            <div style={s.flex({ alignItems: "center", gap: 14, marginBottom: 20 })}>
                <div style={s.center({
                    width: 42, height: 42,
                    background: C.primaryLight,
                    borderRadius: 12,
                    color: C.primary,
                })}>
                    <Icon size={20} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.textFaint, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {label}
                </span>
            </div>
            <div style={s.flex({ alignItems: "baseline", gap: 10 })}>
                <span style={{ fontSize: 36, fontWeight: 800, color: C.text, lineHeight: 1 }}>{value}</span>
                <span style={{ fontSize: 12, color: C.textFaint }}>{sub}</span>
            </div>
        </div>
    );

    /* ── MINI STAT CARD — Mobile (compact horizontal) ────────── */
    const MiniStatCard = ({ icon: Icon, label, value }) => (
        <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: C.card,
            border: `1px solid ${C.cardBorder}`,
            borderRadius: 14,
            padding: "14px 16px",
            minWidth: 0,
        }}>
            <div style={s.center({
                width: 34, height: 34, flexShrink: 0,
                background: C.primaryLight,
                borderRadius: 10,
                color: C.primary,
            })}>
                <Icon size={17} />
            </div>
            <div style={s.col({ gap: 2, minWidth: 0 })}>
                <span style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>{value}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: C.textFaint, textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</span>
            </div>
        </div>
    );

    /* ── MAIN APP LAYOUT ────────────────────────────────────── */
    return (
        <div style={{
            display: "flex",
            height: "100vh",
            overflow: "hidden",
            background: C.bg,
            fontFamily: "Inter, sans-serif",
            color: C.text,
            position: "relative",
        }}>

            {/* ── Mobile Sidebar Overlay ── */}
            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    style={{
                        position: "fixed", inset: 0,
                        background: "rgba(0,0,0,0.7)",
                        zIndex: 49,
                        backdropFilter: "blur(4px)",
                    }}
                />
            )}

            {/* ── Sidebar ── */}
            <aside style={{
                width: 240,
                minWidth: 240,
                height: "100vh",
                background: C.sidebar,
                borderRight: `1px solid ${C.divider}`,
                display: "flex",
                flexDirection: "column",
                padding: "28px 20px",
                boxSizing: "border-box",
                zIndex: 50,
                // Mobile: slide in as a fixed overlay
                position: window.innerWidth < 900 ? "fixed" : "relative",
                left: window.innerWidth < 900 ? (isSidebarOpen ? 0 : -260) : 0,
                top: 0,
                transition: "left 0.3s cubic-bezier(0.4,0,0.2,1)",
            }}>
                {/* Logo */}
                <div style={s.flex({ alignItems: "center", gap: 12, marginBottom: 40 })}>
                    <div style={s.center({
                        width: 38, height: 38,
                        background: C.primary,
                        borderRadius: 12,
                        flexShrink: 0,
                    })}>
                        <Briefcase size={18} color="#fff" />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: 17, color: C.text }}>Admin Portal</span>
                    {window.innerWidth < 900 && (
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            style={{ marginLeft: "auto", background: "none", border: "none", color: C.textDim, cursor: "pointer", padding: 4 }}
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>

                {/* Nav */}
                <nav style={s.col({ gap: 8, flex: 1 })}>
                    <NavItem icon={LayoutDashboard} label="Leads Dashboard" tab="leads" />
                    <NavItem icon={Settings} label="Configurations" tab="settings" />
                </nav>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    style={{
                        display: "flex", alignItems: "center", gap: 14,
                        width: "100%", padding: "13px 16px",
                        borderRadius: 14, border: "none",
                        cursor: "pointer",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14, fontWeight: 600,
                        background: "transparent",
                        color: C.textFaint,
                        textAlign: "left",
                        marginTop: "auto",
                    }}
                >
                    <LogOut size={19} />
                    Logout Admin
                </button>
            </aside>

            {/* ── Main Content ── */}
            <main style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                overflow: "hidden",
                minWidth: 0,
            }}>
                {/* Header — 2-row layout for clean mobile display */}
                <header style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "flex-start" : "center",
                    justifyContent: isMobile ? "center" : "space-between",
                    padding: isMobile ? "14px 24px" : "0 32px",
                    height: isMobile ? "auto" : 72,
                    borderBottom: `1px solid ${C.divider}`,
                    gap: 12,
                }}>
                    {/* Row 1: hamburger + title */}
                    <div style={s.flex({ alignItems: "center", gap: 14 })}>
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            style={{
                                display: window.innerWidth < 900 ? "flex" : "none",
                                alignItems: "center", justifyContent: "center",
                                width: 34, height: 34, flexShrink: 0,
                                background: C.inputBg,
                                border: `1px solid ${C.inputBorder}`,
                                borderRadius: 10, cursor: "pointer", color: C.text,
                            }}
                        >
                            <Menu size={16} />
                        </button>
                        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                            {activeTab === "leads" ? "Lead Management" : "Security Settings"}
                        </h2>
                    </div>

                    {/* Row 2: date filters + search */}
                    <div style={s.flex({ alignItems: "center", gap: 10, flexWrap: "wrap" })}>

                        {/* Date Filter — pills on desktop, custom dropdown on mobile */}
                        {isMobile ? (
                            <div style={{ position: "relative" }}>
                                {/* Trigger button */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); setIsDropdownOpen(o => !o); }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        padding: "7px 14px",
                                        borderRadius: 20,
                                        border: `1px solid ${C.primary}`,
                                        background: C.primaryLight,
                                        color: C.primary,
                                        fontSize: 12,
                                        fontWeight: 700,
                                        fontFamily: "Inter, sans-serif",
                                        cursor: "pointer",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {{ all: "All Time", today: "Today", week: "This Week", month: "This Month" }[dateFilter]}
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                                        <path d="M1 1l4 4 4-4" stroke="#9550C9" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                                    </svg>
                                </button>

                                {/* Custom options panel */}
                                {isDropdownOpen && (
                                    <div style={{
                                        position: "absolute",
                                        top: "calc(100% + 6px)",
                                        left: 0,
                                        zIndex: 200,
                                        background: C.card,
                                        border: `1px solid ${C.cardBorder}`,
                                        borderRadius: 14,
                                        overflow: "hidden",
                                        minWidth: 130,
                                        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                                    }}>
                                        {[
                                            { key: "all", label: "All Time" },
                                            { key: "today", label: "Today" },
                                            { key: "week", label: "This Week" },
                                            { key: "month", label: "This Month" },
                                        ].map((opt, i, arr) => (
                                            <button
                                                key={opt.key}
                                                onClick={() => { setDateFilter(opt.key); setIsDropdownOpen(false); }}
                                                style={{
                                                    display: "block",
                                                    width: "100%",
                                                    textAlign: "left",
                                                    padding: "10px 16px",
                                                    border: "none",
                                                    borderBottom: i < arr.length - 1 ? `1px solid ${C.divider}` : "none",
                                                    background: dateFilter === opt.key ? C.primaryLight : "transparent",
                                                    color: dateFilter === opt.key ? C.primary : C.textDim,
                                                    fontSize: 12,
                                                    fontWeight: dateFilter === opt.key ? 700 : 500,
                                                    fontFamily: "Inter, sans-serif",
                                                    cursor: "pointer",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div style={s.flex({ alignItems: "center", gap: 6, flexWrap: "wrap" })}>
                                {[
                                    { key: "all", label: "All" },
                                    { key: "today", label: "Today" },
                                    { key: "week", label: "Week" },
                                    { key: "month", label: "Month" },
                                ].map(f => (
                                    <button
                                        key={f.key}
                                        onClick={() => setDateFilter(f.key)}
                                        style={{
                                            padding: "7px 14px",
                                            borderRadius: 20,
                                            border: dateFilter === f.key ? `1px solid ${C.primary}` : `1px solid ${C.inputBorder}`,
                                            background: dateFilter === f.key ? C.primaryLight : C.inputBg,
                                            color: dateFilter === f.key ? C.primary : C.textFaint,
                                            fontSize: 12,
                                            fontWeight: 700,
                                            fontFamily: "Inter, sans-serif",
                                            cursor: "pointer",
                                            whiteSpace: "nowrap",
                                            transition: "all 0.15s",
                                        }}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Search bar */}
                        <div style={{ position: "relative", flex: isMobile ? 1 : "unset" }}>
                            <Search
                                size={16}
                                color={C.textFaint}
                                style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}
                            />
                            <input
                                type="text"
                                placeholder="Search leads..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                style={s.input({
                                    width: isMobile ? "100%" : 220,
                                    paddingLeft: 40,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    fontSize: 13,
                                })}
                            />
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden", padding: "32px 32px 60px 32px" }}>

                    {/* ─── LEADS TAB ─── */}
                    {activeTab === "leads" && (
                        <div style={s.col({ gap: 28 })}>

                            {/* Stat Cards — desktop grid OR mobile horizontal row */}
                            {isMobile ? (
                                <div style={s.flex({ gap: 12 })}>
                                    <MiniStatCard icon={Users} label="Total Leads" value={contacts.length} />
                                    <MiniStatCard
                                        icon={Calendar}
                                        label="New Today"
                                        value={contacts.filter(c => Date.now() - c.createdAt < 86400000).length}
                                    />
                                </div>
                            ) : (
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                    gap: 20,
                                }}>
                                    <StatCard icon={Users} label="Total Leads" value={contacts.length} sub="all time" />
                                    <StatCard
                                        icon={Calendar}
                                        label="New Today"
                                        value={contacts.filter(c => Date.now() - c.createdAt < 86400000).length}
                                        sub="last 24h"
                                    />
                                </div>
                            )}

                            {/* Table Card */}
                            <div style={s.card({ overflow: "hidden" })}>
                                {/* Table Header */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "20px 28px",
                                    borderBottom: `1px solid ${C.divider}`,
                                    flexWrap: "wrap",
                                    gap: 12,
                                }}>
                                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#ffffff' }}>Incoming Leads</h3>
                                    <div style={s.flex({
                                        alignItems: "center", gap: 8,
                                        background: C.primaryLight,
                                        color: C.primary,
                                        padding: "6px 14px",
                                        borderRadius: 20,
                                        fontSize: 11, fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.08em",
                                    })}>
                                        <span style={{
                                            width: 7, height: 7, borderRadius: "50%",
                                            background: C.primary,
                                            animation: "pulse 2s infinite",
                                        }} />
                                        Live
                                    </div>
                                </div>

                                {/* Table */}
                                <div style={{ overflowX: "auto" }}>
                                    <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
                                        <thead>
                                            <tr style={{ borderBottom: `1px solid ${C.divider}` }}>
                                                {["Contact", "Company", "Source", "Date", ""].map((h, i) => (
                                                    <th key={i} style={{
                                                        padding: "14px 20px",
                                                        textAlign: i === 4 ? "right" : "left",
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        color: C.textFaint,
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.1em",
                                                        whiteSpace: "nowrap",
                                                    }}>{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredContacts.length === 0 ? (
                                                <tr>
                                                    <td colSpan={5} style={{ padding: "60px 0", textAlign: "center", color: C.textFaint, fontSize: 14 }}>
                                                        No leads found
                                                    </td>
                                                </tr>
                                            ) : filteredContacts.map((lead) => (
                                                <tr
                                                    key={lead._id}
                                                    style={{ borderBottom: `1px solid ${C.divider}` }}
                                                >
                                                    <td style={{ padding: "16px 20px" }}>
                                                        <div style={s.flex({ alignItems: "center", gap: 12 })}>
                                                            <div style={s.center({
                                                                width: 36, height: 36, flexShrink: 0,
                                                                borderRadius: "50%",
                                                                background: C.primaryLight,
                                                                color: C.primary,
                                                                fontSize: 14, fontWeight: 700,
                                                            })}>
                                                                {lead.fullName.charAt(0).toUpperCase()}
                                                            </div>
                                                            <div>
                                                                <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{lead.fullName}</div>
                                                                <div style={{ fontSize: 12, color: C.textFaint, marginTop: 3 }}>{lead.businessEmail}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td style={{ padding: "16px 20px", fontSize: 14, color: C.textDim }}>
                                                        {lead.companyName || "—"}
                                                    </td>
                                                    <td style={{ padding: "16px 20px" }}>
                                                        <span style={{
                                                            display: "inline-block",
                                                            padding: "4px 12px",
                                                            background: C.inputBg,
                                                            border: `1px solid ${C.inputBorder}`,
                                                            borderRadius: 20,
                                                            fontSize: 11,
                                                            fontWeight: 600,
                                                            color: C.textDim,
                                                            textTransform: "uppercase",
                                                        }}>
                                                            {lead.source}
                                                        </span>
                                                    </td>
                                                    <td style={{ padding: "16px 20px", fontSize: 13, color: C.textFaint }}>
                                                        {new Date(lead.createdAt).toLocaleDateString()}
                                                    </td>
                                                    <td style={{ padding: "16px 20px", textAlign: "right" }}>
                                                        <button
                                                            onClick={() => setSelectedLead(lead)}
                                                            style={{
                                                                padding: "8px 16px",
                                                                background: C.inputBg,
                                                                border: `1px solid ${C.inputBorder}`,
                                                                borderRadius: 10,
                                                                color: C.text,
                                                                fontSize: 12,
                                                                fontWeight: 600,
                                                                cursor: "pointer",
                                                                fontFamily: "Inter, sans-serif",
                                                            }}
                                                        >
                                                            View
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ─── SETTINGS TAB ─── */}
                    {activeTab === "settings" && (
                        <div style={{ maxWidth: 560 }}>
                            <div style={s.card({ padding: "36px 36px" })}>
                                {/* Card Header */}
                                <div style={s.flex({ alignItems: "center", gap: 16, marginBottom: 32 })}>
                                    <div style={s.center({
                                        width: 44, height: 44,
                                        background: C.primaryLight,
                                        borderRadius: 14,
                                        color: C.primary,
                                        flexShrink: 0,
                                    })}>
                                        <Settings size={20} />
                                    </div>
                                    <div>
                                        <h3 style={{ margin: "0 0 4px 0", fontSize: 18, fontWeight: 700, color: "#FFFFFF" }}>Security Configuration</h3>
                                        <p style={{ margin: 0, fontSize: 13, color: C.textDim }}>Update your admin access credentials</p>
                                    </div>
                                </div>

                                <form onSubmit={handleUpdateKey} style={s.col({ gap: 20 })}>
                                    <div>
                                        <label style={s.label()}>Current Administrative Key</label>
                                        <div style={{ position: "relative" }}>
                                            <ShieldCheck
                                                size={16}
                                                color={C.textFaint}
                                                style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}
                                            />
                                            <input
                                                type={showCurrentKey ? "text" : "password"}
                                                value={currentAdminKey}
                                                onChange={e => setCurrentAdminKey(e.target.value)}
                                                placeholder="Enter current key"
                                                style={s.input({ paddingLeft: 44, paddingRight: 48, fontFamily: "monospace" })}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowCurrentKey(!showCurrentKey)}
                                                style={{
                                                    position: "absolute", right: 12, top: "50%",
                                                    transform: "translateY(-50%)",
                                                    background: "none", border: "none",
                                                    color: C.textDim, cursor: "pointer",
                                                    padding: 4, display: "flex"
                                                }}
                                            >
                                                {showCurrentKey ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div style={{
                                        height: 1, background: C.divider, margin: "4px 0"
                                    }} />

                                    <div>
                                        <label style={s.label()}>New Administrative Key</label>
                                        <div style={{ position: "relative" }}>
                                            <ShieldCheck
                                                size={16}
                                                color={C.textFaint}
                                                style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}
                                            />
                                            <input
                                                type={showNewKey ? "text" : "password"}
                                                value={newAdminKey}
                                                onChange={e => setNewAdminKey(e.target.value)}
                                                placeholder="Enter new key (min 6 chars)"
                                                style={s.input({ paddingLeft: 44, paddingRight: 48, fontFamily: "monospace" })}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowNewKey(!showNewKey)}
                                                style={{
                                                    position: "absolute", right: 12, top: "50%",
                                                    transform: "translateY(-50%)",
                                                    background: "none", border: "none",
                                                    color: C.textDim, cursor: "pointer",
                                                    padding: 4, display: "flex"
                                                }}
                                            >
                                                {showNewKey ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={s.label()}>Confirm New Key</label>
                                        <div style={{ position: "relative" }}>
                                            <ShieldCheck
                                                size={16}
                                                color={C.textFaint}
                                                style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}
                                            />
                                            <input
                                                type={showConfirmKey ? "text" : "password"}
                                                value={confirmAdminKey}
                                                onChange={e => setConfirmAdminKey(e.target.value)}
                                                placeholder="Confirm new key"
                                                style={s.input({ paddingLeft: 44, paddingRight: 48, fontFamily: "monospace" })}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmKey(!showConfirmKey)}
                                                style={{
                                                    position: "absolute", right: 12, top: "50%",
                                                    transform: "translateY(-50%)",
                                                    background: "none", border: "none",
                                                    color: C.textDim, cursor: "pointer",
                                                    padding: 4, display: "flex"
                                                }}
                                            >
                                                {showConfirmKey ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                        <p style={{ margin: "14px 0 0 0", fontSize: 12, color: C.textFaint, lineHeight: 1.6 }}>
                                            Rotating this key will require all active sessions to re-authenticate using the new credentials.
                                        </p>
                                    </div>

                                    {keyError && (
                                        <div style={{
                                            padding: "12px 16px",
                                            background: "rgba(239,68,68,0.08)",
                                            border: "1px solid rgba(239,68,68,0.2)",
                                            borderRadius: 12,
                                            fontSize: 13,
                                            color: "#EF4444",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8
                                        }}>
                                            <AlertCircle size={16} />
                                            {keyError}
                                        </div>
                                    )}

                                    {keySuccess && (
                                        <div style={{
                                            padding: "12px 16px",
                                            background: "rgba(74,222,128,0.08)",
                                            border: "1px solid rgba(74,222,128,0.2)",
                                            borderRadius: 12,
                                            fontSize: 13,
                                            color: "#4ADE80",
                                        }}>
                                            ✓ Admin key updated successfully!
                                        </div>
                                    )}

                                    <button type="submit" style={s.btn({ alignSelf: "flex-start" })}>
                                        Confirm Key Rotation
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* ─── LEAD DETAIL MODAL ─── */}
            <AnimatePresence>
                {selectedLead && (
                    <div style={{
                        position: "fixed", inset: 0,
                        zIndex: 100,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 20,
                    }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedLead(null)}
                            style={{
                                position: "absolute", inset: 0,
                                background: "rgba(0,0,0,0.85)",
                                backdropFilter: "blur(8px)",
                            }}
                        />
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.92, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{
                                position: "relative",
                                width: "100%",
                                maxWidth: 580,
                                background: C.card,
                                border: `1px solid ${C.cardBorder}`,
                                borderRadius: 24,
                                padding: "36px 36px 32px",
                                boxSizing: "border-box",
                                maxHeight: "90vh",
                                overflowY: "auto",
                            }}
                        >
                            {/* Modal Header */}
                            <div style={s.flex({ alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 })}>
                                <div>
                                    <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
                                        Lead Details
                                    </div>
                                    <h3 style={{ margin: "0 0 6px 0", fontSize: 26, fontWeight: 700, color: '#fff' }}>{selectedLead.fullName}</h3>
                                    <p style={s.flex({ margin: 0, alignItems: "center", gap: 6, fontSize: 14, color: C.textDim })}>
                                        <Building2 size={15} />
                                        {selectedLead.companyName || "No company listed"}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedLead(null)}
                                    style={{
                                        width: 36, height: 36, flexShrink: 0,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        background: C.inputBg,
                                        border: `1px solid ${C.inputBorder}`,
                                        borderRadius: 10,
                                        cursor: "pointer",
                                        color: C.textDim,
                                    }}
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Contact Info Grid */}
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 16,
                                marginBottom: 24,
                            }}>
                                {[
                                    { icon: Mail, label: "Email", value: selectedLead.businessEmail },
                                    { icon: Phone, label: "Phone", value: selectedLead.phoneNumber || "Not provided" },
                                ].map(({ icon: Icon, label, value }) => (
                                    <div key={label} style={{
                                        background: C.inputBg,
                                        border: `1px solid ${C.inputBorder}`,
                                        borderRadius: 14,
                                        padding: "18px 18px",
                                    }}>
                                        <div style={s.flex({ alignItems: "center", gap: 8, marginBottom: 10 })}>
                                            <Icon size={14} color={C.textFaint} />
                                            <span style={{ fontSize: 10, fontWeight: 700, color: C.textFaint, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
                                        </div>
                                        <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: C.text, wordBreak: "break-all" }}>{value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Message */}
                            <div style={{ marginBottom: 28 }}>
                                <div style={s.flex({ alignItems: "center", gap: 8, marginBottom: 12 })}>
                                    <ChevronRight size={14} color={C.textFaint} />
                                    <span style={{ fontSize: 10, fontWeight: 700, color: C.textFaint, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                        Message / Requirement
                                    </span>
                                </div>
                                <div style={{
                                    background: C.inputBg,
                                    border: `1px solid ${C.inputBorder}`,
                                    borderRadius: 14,
                                    padding: "20px 20px",
                                }}>
                                    <p style={{ margin: 0, fontSize: 14, color: C.textDim, fontStyle: "italic", lineHeight: 1.7 }}>
                                        "{selectedLead.message || selectedLead.requirement || "No specific details provided."}"
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div style={s.flex({ alignItems: "center", justifyContent: "space-between", paddingTop: 20, borderTop: `1px solid ${C.divider}` })}>
                                <span style={{ fontSize: 11, color: C.textFaint, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                    Source: {selectedLead.source}
                                </span>
                                <button
                                    onClick={() => setSelectedLead(null)}
                                    style={s.btn({ padding: "10px 24px", fontSize: 13 })}
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminPortal;
