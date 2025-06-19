export default function ShareOptions() {
  return (
    <div className="flex items-center gap-7 mb-10">
      <button className="cursor-pointer">
        <img src="/assets/icons/bookmark.svg" alt="" className="w-9 h-9" />
      </button>
      <button className="cursor-pointer">
        <img src="/assets/icons/share.svg" alt="" className="w-9 h-9" />
      </button>
      <button className="cursor-pointer">
        <img src="/assets/icons/facebook.svg" alt="" className="w-9 h-9" />
      </button>
      <button className="cursor-pointer">
        <img src="/assets/icons/whatsapp.png" alt="" className="w-9 h-9" />
      </button>
      <button className="cursor-pointer">
        <img src="/assets/icons/twitter.svg" alt="" className="!w-9 h-9" />
      </button>
    </div>
  );
}
