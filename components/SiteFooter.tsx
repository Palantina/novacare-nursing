import React from "react";

const brand = { blue: "#0B2D5C" };

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gray-200 py-8 text-center text-sm opacity-80">
      <div className="mb-4">
        <p>📍 Hobart & Surrounds, Tasmania</p>
        <p>
          📞{" "}
          <a href="tel:+61488086271" className="underline">
            0488 086 271
          </a>{" "}
          &nbsp; | &nbsp; ✉{" "}
          <a href="mailto:info@novacarenursing.com.au" className="underline">
            info@novacarenursing.com.au
          </a>
        </p>
      </div>
      <p style={{ color: brand.blue }}>
        © {new Date().getFullYear()} NovaCare Nursing. All rights reserved.
      </p>
    </footer>
  );
}

