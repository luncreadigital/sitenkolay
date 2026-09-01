export function WhatsApp() {
  return (
    <a
      href="https://wa.me/905428100586?text=Merhaba%2C%20web%20sitesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-5 z-40 hidden items-center gap-2 rounded-full bg-[#0d1117] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.4)] md:right-8 md:bottom-8 md:inline-flex"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="white">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5ZM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9 9 0 1 1 12 21Zm5-6.7c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.3-.4v-.4c0-.1 0-.3-.1-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3c.1.2 1.6 2.5 3.8 3.5 1.5.6 1.8.7 2.5.6.4 0 1.2-.5 1.4-1s.2-.9.1-1-.3-.2-.6-.3Z" />
        </svg>
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px]">
          3
        </span>
      </span>
      Mesaj
    </a>
  );
}
