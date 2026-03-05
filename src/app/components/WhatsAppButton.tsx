import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface WhatsAppButtonProps {
  type?: 'chat' | 'group';
  phoneNumber?: string;
  groupLink?: string;
  message?: string;
  position?: 'fixed' | 'inline';
  className?: string;
}

export function WhatsAppButton({
  type = 'chat',
  phoneNumber = '919422769242',
  groupLink = 'https://chat.whatsapp.com/DaqiHYV6ztN3EeOZ1cVFXD?mode=gi_t',
  message = 'Hello Durgaraj Team, I am interested in Sahyadri Trek.',
  position = 'fixed',
  className = ''
}: WhatsAppButtonProps) {
  const handleClick = () => {
    let url = '';
    if (type === 'chat') {
      const encodedMessage = encodeURIComponent(message);
      url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    } else {
      url = groupLink;
    }
    window.open(url, '_blank');
  };

  if (position === 'fixed') {
    return (
      <motion.button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#1fb855] transition-all flex items-center gap-2 justify-center ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{type === 'chat' ? 'WhatsApp Chat' : 'Join WhatsApp Group'}</span>
    </button>
  );
}

// Mobile sticky bottom bar
export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-lg border-t border-border lg:hidden shadow-xl">
      <div className="flex items-center justify-around p-3">
        <button
          onClick={() => {
            const url = `https://wa.me/919422769242?text=${encodeURIComponent('Hello Durgaraj Team, I am interested in Sahyadri Trek.')}`;
            window.open(url, '_blank');
          }}
          className="flex flex-col items-center gap-1 text-[#25D366] hover:text-[#1fb855] transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs font-medium">Chat</span>
        </button>

        <button
          onClick={() => {
            window.open('https://chat.whatsapp.com/DaqiHYV6ztN3EeOZ1cVFXD?mode=gi_t', '_blank');
          }}
          className="flex flex-col items-center gap-1 text-primary hover:text-primary/80 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs font-medium">Join Group</span>
        </button>

        <a
          href="tel:+919422769242"
          className="flex flex-col items-center gap-1 text-secondary hover:text-secondary/80 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-xs font-medium">Call Now</span>
        </a>
      </div>
    </div>
  );
}