# Assets Reference Map

This document maps the reference screenshots to the corresponding assets needed for the PMAC React project.

---

## 1. Navbar Section
**Reference**: `referance/navbar.png`

| Element | Asset File | Status |
|---------|------------|--------|
| Logo | `assets/pmac_logo.png` | Required |

---

## 2. Hero Section
**Reference**: `referance/hero.png`

| Element | Asset File | Status |
|---------|------------|--------|
| Hero Background | `assets/hero_png.jpg` | Required |
| Logo | `assets/pmac_logo.png` | Required |

---

## 3. Feature Section (Engineering Progress)
**Reference**: `referance/features.png`

| Element | Asset File | Status |
|---------|------------|--------|
| Container Image | `assets/progress_png.png` | Required |
| Left Decoration | `assets/progress_decoration-l.png` | Optional |
| Right Decoration | `assets/progress_decoration-r.png` | Optional |
| Check Icon 1 | `assets/progress_icon-1.png` | Required |
| Check Icon 2 | `assets/progress_icon-2.png` | Required |

---

## 4. Stats Section
**Reference**: `referance/stats.png`

| Element | Asset File | Status |
|---------|------------|--------|
| No images required | - | - |

---

## 5. Solutions Section
**Reference**: `referance/solutions.png`

| Element | Asset File | Status |
|---------|------------|--------|
| Solution Card 1 | `assets/solutions-1.png` | Required |
| Solution Card 2 | `assets/solutions-2.jpg` | Required |
| Solution Card 3 | `assets/soutions-3.png` | Required |

---

## 6. Digital Section
**Reference**: `referance/approach.png`

| Element | Asset File | Status |
|---------|------------|--------|
| Digital Systems Image | `assets/systems_png.png` | Required |
| Left Decoration | `assets/systems_decoration.png` | Optional |
| System Icons | `assets/systems_icon-1.png` through `assets/systems_icon-6.png` | Optional |

---

## 7. Industries Section
**Reference**: `referance/industries.png`

| Element | Asset File | Status |
|---------|------------|--------|
| Agriculture | `assets/industries-1.jpg` | Required |
| Oil and Gas | `assets/industries-2.png` | Required |
| Locomotive | `assets/industries-3.png` | Required |
| Medical | `assets/industries-4.png` | Required |

---

## 8. Testimonial Section
**Reference**: `referance/testimony.png`

| Element | Asset File | Status |
|---------|------------|--------|
| Person Avatar | `assets/testimony-person.jpg` | Required |

---

## 9. Partners Section
**Reference**: `referance/trusted.png`

| Element | Asset File | Status |
|---------|------------|--------|
| Partner Logo 1 | `assets/trusted_company-0.png` | Required |
| Partner Logo 2 | `assets/trusted_company-1.png` | Required |
| Partner Logo 3 | `assets/trusted_company-2.png` | Required |
| Partner Logo 4 | `assets/trusted_company-3.png` | Required |
| Partner Logo 5 | `assets/trusted_company-4.png` | Required |
| Partner Logo 6 | `assets/trusted_company-5.png` | Required |

---

## 10. CTA Section
**Reference**: `referance/ctc.png`

| Element | Asset File | Status |
|---------|------------|--------|
| Contact Icon | `assets/contact_icon.png` | Optional |
| Decoration | `assets/contact_section_decoration.png` | Optional |

---

## 11. Footer Section
**Reference**: `referance/footer.png`

| Element | Asset File | Status |
|---------|------------|--------|
| Footer Image | `assets/footer_png.jpg` | Optional |
| Footer Capabilities | `assets/footer_capablities_png.jpg` | Optional |
| Logo | `assets/pmac_logo.png` | Required |

---

## Summary - Required Assets

Copy these files from `pmac/assets/` to `pmac_react/public/assets/`:

```
Required:
├── pmac_logo.png
├── hero_png.jpg
├── progress_png.png
├── progress_icon-1.png
├── progress_icon-2.png
├── solutions-1.png
├── solutions-2.jpg
├── soutions-3.png
├── systems_png.png
├── industries-1.jpg
├── industries-2.png
├── industries-3.png
├── industries-4.png
├── testimony-person.jpg
├── trusted_company-0.png
├── trusted_company-1.png
├── trusted_company-2.png
├── trusted_company-3.png
├── trusted_company-4.png
└── trusted_company-5.png
```

---

## Component to Section Mapping

| Component | Section File | Reference |
|-----------|--------------|-----------|
| Navbar | `sections/Navbar.jsx` | navbar.png |
| Hero | `sections/Hero.jsx` | hero.png |
| FeatureSection | `sections/FeatureSection.jsx` | features.png |
| Stats | `sections/Stats.jsx` | stats.png |
| Solutions | `sections/Solutions.jsx` | solutions.png |
| DigitalSection | `sections/DigitalSection.jsx` | approach.png |
| Industries | `sections/Industries.jsx` | industries.png |
| Testimonial | `sections/Testimonial.jsx` | testimony.png |
| Partners | `sections/Partners.jsx` | trusted.png |
| CTA | `sections/CTA.jsx` | ctc.png |
| Footer | `sections/Footer.jsx` | footer.png |
