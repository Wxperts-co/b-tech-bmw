import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export interface BreadcrumItem {
  label: string;
  href?: string;
}

export interface BreadcrumProps {
  title: string;
  description?: string;
  items?: BreadcrumItem[];
  bgImage?: string;
}

export default function Breadcrum({
  title,
  description,
  items,
  bgImage = "/images/breadcrumb-bg.jpg",
}: BreadcrumProps) {
  const trail = items && items.length > 0 ? items : [{ label: title }];

  return (
    <section className="relative overflow-hidden bg-[#040812] text-white min-h-[400px] md:min-h-[500px] flex items-center pt-32 sm:pt-40 pb-12 sm:pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040812] via-[#040812]/58 to-[#040812]/25" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#040812] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-3 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        <div className="inline-flex items-center gap-1 mb-3" aria-hidden="true">
          <span className="w-2.5 h-3.5 bg-[#0070c0] -skew-x-[22deg] rounded-[1px]" />
          <span className="w-2.5 h-3.5 bg-[#00a3e0] -skew-x-[22deg] rounded-[1px]" />
          <span className="w-2.5 h-3.5 bg-[#e31e24] -skew-x-[22deg] rounded-[1px]" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold italic tracking-tight text-white">
          {title}
        </h1>

        {description && (
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed">
            {description}
          </p>
        )}

        <nav
          aria-label="Breadcrumb"
          className="mt-8 flex flex-wrap items-center gap-2.5 text-sm text-gray-300"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-[#00c8ff] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>

          {trail.map((item, idx) => {
            const isLast = idx === trail.length - 1;
            return (
              <span key={`${item.label}-${idx}`} className="inline-flex items-center gap-2.5">
                <span className="text-gray-500">/</span>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#00c8ff] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-white">{item.label}</span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
