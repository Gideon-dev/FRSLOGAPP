export function PageSpinner({ show }: { show: boolean }) {
    if (!show) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
        <div className="w-12 h-12 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  