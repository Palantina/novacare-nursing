            {/* Services */}
            <Link
              href="/services"
              className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                pathname === "/services" ? "underline" : ""
              }`}
              style={{ color: brandGold }}
            >
              Services
            </Link>

            {/* Fees (NEW) */}
            <Link
              href="/fees"
              className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                pathname === "/fees" ? "underline" : ""
              }`}
              style={{ color: brandGold }}
            >
              Fees
            </Link>

            {/* For Providers (NEW) */}
            <Link
              href="/providers"
              className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                pathname === "/providers" ? "underline" : ""
              }`}
              style={{ color: brandGold }}
            >
              For Providers
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`text-sm md:text-base font-semibold hover:opacity-80 transition-opacity ${
                pathname === "/contact" ? "underline" : ""
              }`}
              style={{ color: brandGold }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
