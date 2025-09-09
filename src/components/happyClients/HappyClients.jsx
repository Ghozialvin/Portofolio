// HappyClients.jsx
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

/**
 * Hosts untuk mencoba mengambil SVG dari SimpleIcons (primary) + fallback CDN
 */
const hosts = [
  (slug) => `https://cdn.simpleicons.org/${slug}`, // preferred
  (slug) => `https://unpkg.com/simple-icons@latest/icons/${slug}.svg`,
  (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`,
];

const tryLocalPath = (slug) => `/assets/icons/${slug}.svg`; // letakkan SVG lokal di public/assets/icons/

/**
 * Warna brand (perkiraan / umum).
 * Dipakai untuk hover color jika SVG menggunakan currentColor (SimpleIcons umumnya memakai currentColor).
 * Jika kamu ingin warna presisi, ganti hex di mapping ini.
 */
const brandColors = {
  python: "#3776AB",
  postgresql: "#336791",
  mysql: "#4479A1",
  mariadb: "#003545",
  mongodb: "#47A248",
  amazonaws: "#FF9900",
  aws: "#FF9900",
  googlecloud: "#4285F4",
  "google-cloud": "#4285F4",
  react: "#61DAFB",
  nodedotjs: "#339933",
  nodejs: "#339933",
  rstudio: "#276DC3",
  r: "#276DC3",
  dbeaver: "#5E7A92",
  php: "#777BB4",
  "apache-hadoop": "#66CCFF",
  hadoop: "#66CCFF",
  "apache-hadoop": "#66CCFF",
  "power-bi": "#F2C811",
  powerbi: "#F2C811",
  tableau: "#E97627",
  microsoft: "#5B5B5B",
  "microsoft-office": "#D83B01",
};

/**
 * RobustBrandIcon
 * - mencoba beberapa slug + host (fetch)
 * - memasukkan SVG inline (dangerouslySetInnerHTML) sehingga kita bisa mengubah warna dengan CSS
 */
const RobustBrandIcon = ({ name, slugs = [], className = "", size = 56 }) => {
  const [slugIndex, setSlugIndex] = useState(0);
  const [hostIndex, setHostIndex] = useState(0);
  const [svgContent, setSvgContent] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let mounted = true;
    setSvgContent(null);
    setFailed(false);

    const load = async () => {
      if (!slugs || slugs.length === 0) {
        setFailed(true);
        return;
      }

      const slug = slugs[slugIndex];
      const hostFn = hosts[hostIndex];
      if (!hostFn) {
        // all hosts exhausted for this slug
        // try next slug if available
        if (slugIndex < slugs.length - 1) {
          setHostIndex(0);
          setSlugIndex((s) => s + 1);
        } else {
          // try local file fallback
          const local = tryLocalPath(slugs[0] || name.toLowerCase().replace(/\s+/g, "-"));
          try {
            const r = await fetch(local);
            if (!mounted) return;
            if (r.ok) {
              const text = await r.text();
              setSvgContent(text);
            } else {
              setFailed(true);
            }
          } catch (e) {
            console.warn(`[HappyClients] local fallback failed for ${name}`, e);
            setFailed(true);
          }
        }
        return;
      }

      const url = hostFn(slug);
      try {
        const res = await fetch(url);
        if (!mounted) return;
        if (!res.ok) {
          // try next host
          if (hostIndex < hosts.length - 1) {
            setHostIndex((h) => h + 1);
          } else {
            // all hosts for this slug tried: move to next slug
            if (slugIndex < slugs.length - 1) {
              setHostIndex(0);
              setSlugIndex((s) => s + 1);
            } else {
              // will fallback to local next loop iteration
              setHostIndex(hosts.length); // trigger local attempt above in next run
            }
          }
          return;
        }
        const text = await res.text();
        // remove xml declaration if present (not required but cleaner)
        const cleaned = text.replace(/<\?xml.*?\?>\s*/i, "");
        setSvgContent(cleaned);
      } catch (err) {
        console.warn(`[HappyClients] fetch error for ${name} @ ${url}`, err);
        // try next host
        if (hostIndex < hosts.length - 1) {
          setHostIndex((h) => h + 1);
        } else if (slugIndex < slugs.length - 1) {
          setHostIndex(0);
          setSlugIndex((s) => s + 1);
        } else {
          // try local next run
          setHostIndex(hosts.length);
        }
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, [slugIndex, hostIndex, slugs, name]);

  // If everything failed, show initials fallback
  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-600 rounded-md px-2 py-1 text-sm ${className}`}
        style={{ width: size, height: size }}
        title={`${name} (no icon)`}
      >
        {name
          .split(" ")
          .slice(0, 2)
          .map((w) => w[0])
          .join("")
          .toUpperCase()}
      </div>
    );
  }

  // while loading, show placeholder square (grayscale)
  if (!svgContent) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-md ${className}`}
        style={{ width: size, height: size }}
        title={name}
      />
    );
  }

  // choose color by first slug that was tried (best guess)
  const primarySlug = (slugs && slugs[0]) || name.toLowerCase().replace(/\s+/g, "-");
  const brandColor = brandColors[primarySlug] || "#A53DFF";

  // wrap SVG inline so we can apply CSS (grayscale -> color on hover)
  return (
    <span
      className={`brand-svg-wrapper ${className}`}
      title={name}
      style={{
        width: size,
        height: size,
        display: "inline-block",
        verticalAlign: "middle",
        // set CSS variable for color
        ["--icon-color"]: brandColor,
      }}
      // dangerously set innerHTML with inline SVG fetched
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

/**
 * Brands: PySpark replaced with Hadoop per request.
 * Provide candidate slugs (try multiple variants).
 */
const brands = [
  { name: "Python", slugs: ["python"] },
  { name: "PostgreSQL", slugs: ["postgresql", "postgres"] },
  { name: "SQL (MySQL)", slugs: ["mysql", "mariadb"] },
  { name: "MongoDB", slugs: ["mongodb"] },
  { name: "AWS", slugs: ["amazonaws", "aws"] },
  { name: "GCP", slugs: ["googlecloud", "google-cloud", "googlecloudplatform"] },
  { name: "React", slugs: ["react"] },
  { name: "Node.js", slugs: ["nodedotjs", "node.js", "nodejs"] },
  { name: "R / RStudio", slugs: ["rstudio", "r"] },
  { name: "DBeaver", slugs: ["dbeaver", "dbeaver-ide"] },
  { name: "PHP", slugs: ["php"] },
  // PySpark replaced with Hadoop
  { name: "Hadoop", slugs: ["apache-hadoop", "hadoop", "apachehadoop"] },
  { name: "Power BI", slugs: ["power-bi", "microsoft-power-bi", "microsoftpowerbi", "powerbi"] },
  { name: "Tableau", slugs: ["tableau"] },
  { name: "Microsoft Office", slugs: ["microsoft", "microsoft-office", "office365"] },
];

const iconWrapperClass = "ps-4 sm:ps-8 md:ps-12";
const iconSize = 56;

/**
 * Component-level CSS for inline SVG coloring + hover behaviour
 * - .brand-svg-wrapper svg { color: var(--icon-color); }
 * - on wrapper hover, remove grayscale (so color shows)
 */
const InlineStyles = () => (
  <style>{`
    .brand-svg-wrapper svg { 
      width: 100% !important; 
      height: 100% !important; 
      display: block;
      /* SimpleIcons typically use fill="currentColor", so set color */
      color: var(--icon-color);
      fill: currentColor;
      transition: filter .25s ease, transform .18s ease;
      filter: grayscale(100%) brightness(.95) contrast(.9);
      transform: translateY(0);
    }
    .brand-svg-wrapper:hover svg {
      filter: none;
      transform: translateY(-3px);
    }
    /* ensure svg paths/strokes that use fill/stroke currentColor pick it */
    .brand-svg-wrapper svg [fill] { fill: currentColor !important; }
    .brand-svg-wrapper svg [stroke] { stroke: currentColor !important; }
  `}</style>
);

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <InlineStyles />
      <div className="max-w-144.25 text-center">
        <p className="section-title mb-6">Skill And Tools</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I have experience using various tools and technologies to support data science, web development, and system integration projects.
        </p>
      </div>

      <Marquee pauseOnHover={true} speed={80} gradient={false}>
        <div className="flex items-center pt-4 md:pt-10">
          {brands.map((b, idx) => (
            <span className={iconWrapperClass} key={idx}>
              <RobustBrandIcon
                name={b.name}
                slugs={b.slugs}
                className=""
                size={iconSize}
              />
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;
