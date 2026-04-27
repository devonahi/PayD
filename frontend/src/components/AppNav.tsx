import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Code,
  User,
  Wallet,
  FileText,
  Globe,
  LayoutDashboard,
  Activity,
  ShieldAlert,
  Menu,
  X,
  PieChart,
  Briefcase,
} from 'lucide-react';
import { Avatar } from './Avatar';
import { AvatarUpload } from './AvatarUpload';
import { useWallet } from '../hooks/useWallet';

const AppNav: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isProfileEditorOpen, setIsProfileEditorOpen] = useState(false);
  const [userImageUrl, setUserImageUrl] = useState<string | undefined>(undefined);
  const { address, walletName, isConnecting, network, setNetwork } = useWallet();

  useEffect(() => {
    const savedImage = localStorage.getItem('payd:user-avatar');
    if (savedImage) {
      setUserImageUrl(savedImage);
    }
  }, []);

  // Mock user data - replace with actual user context
  const currentUser = {
    email: 'user@example.com',
    name: 'John Doe',
    imageUrl: userImageUrl,
  };

  const navLinks = (
    <>
      <NavLink
        to="/employer"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px] ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white active:scale-95'
          }`
        }
        onClick={() => setMobileOpen(false)}
      >
        <span className="opacity-70" aria-hidden="true">
          <Briefcase className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline">Employer</span>
        <span className="sm:hidden">Employer</span>
      </NavLink>

      <NavLink
        to="/payroll"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px] ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white active:scale-95'
          }`
        }
        onClick={() => setMobileOpen(false)}
      >
        <span className="opacity-70" aria-hidden="true">
          <Wallet className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline">Payroll</span>
        <span className="sm:hidden">Payroll</span>
      </NavLink>

      <NavLink
        to="/employee"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px] ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white active:scale-95'
          }`
        }
        onClick={() => setMobileOpen(false)}
      >
        <span className="opacity-70" aria-hidden="true">
          <User className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline">Employees</span>
        <span className="sm:hidden">Employees</span>
      </NavLink>

      <NavLink
        to="/portal"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px] ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white active:scale-95'
          }`
        }
      >
        <span className="opacity-70" aria-hidden="true">
          <LayoutDashboard className="w-4 h-4" />
        </span>
        My Portal
      </NavLink>

      <NavLink
        to="/reports"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px] ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white active:scale-95'
          }`
        }
        onClick={() => setMobileOpen(false)}
      >
        <span className="opacity-70" aria-hidden="true">
          <FileText className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline">Reports</span>
        <span className="sm:hidden">Reports</span>
      </NavLink>

      <NavLink
        to="/cross-asset-payment"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px] ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white active:scale-95'
          }`
        }
        onClick={() => setMobileOpen(false)}
      >
        <span className="opacity-70" aria-hidden="true">
          <Globe className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline">Cross-Asset</span>
        <span className="sm:hidden">Cross-Asset</span>
      </NavLink>

      <NavLink
        to="/transactions"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px] ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white active:scale-95'
          }`
        }
      >
        <span className="opacity-70" aria-hidden="true">
          <Activity className="w-4 h-4" />
        </span>
        History
      </NavLink>

      <NavLink
        to="/revenue-split"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px] ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white active:scale-95'
          }`
        }
        onClick={() => setMobileOpen(false)}
      >
        <span className="opacity-70" aria-hidden="true">
          <PieChart className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline">Revenue Split</span>
        <span className="sm:hidden">Revenue Split</span>
      </NavLink>

      <div className="w-px h-5 bg-(--border-hi) mx-2 hidden lg:block" aria-hidden="true" />
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-500/50 min-h-[44px] ${
            isActive
              ? 'text-red-500 bg-red-500/10'
              : 'text-red-400 hover:bg-red-500/20 hover:text-red-500 active:scale-95'
          }`
        }
      >
        <ShieldAlert className="w-4 h-4" aria-hidden="true" />
        Admin
      </NavLink>

      <NavLink
        to="/debug"
        className={({ isActive }) =>
          `flex items-center gap-1 px-3 py-2 rounded-lg text-[11px] font-mono tracking-wide border transition focus:outline-none focus:ring-2 focus:ring-accent2/50 min-h-[44px] ${
            isActive
              ? 'text-(--accent2) bg-[rgba(124,111,247,0.06)] border-[rgba(124,111,247,0.25)]'
              : 'text-(--accent2) bg-[rgba(124,111,247,0.06)] border-[rgba(124,111,247,0.25)] hover:bg-[rgba(124,111,247,0.12)] active:scale-95'
          }`
        }
        onClick={() => setMobileOpen(false)}
      >
        <Code className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">debugger</span>
        <span className="sm:hidden">debugger</span>
      </NavLink>

      <NavLink
        to="/rewards"
        onClick={() => setMobileOpen(false)}
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px] ${
            isActive
              ? 'text-(--accent) bg-white/5'
              : 'text-(--muted) hover:bg-white/10 hover:text-white active:scale-95'
          }`
        }
      >
        Rewards
      </NavLink>

      <Link
        to="/help"
        onClick={() => setMobileOpen(false)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[44px] text-(--accent) hover:bg-(--accent)/10 active:scale-95"
      >
        Help
      </Link>
    </>
  );

  return (
    <nav className="relative w-full">
      <div className="flex items-center justify-between gap-4 px-3 py-2">
        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-4">{navLinks}</div>

        {/* Mobile menu button */}
        <button
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-white/5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent/50 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>

        {/* User profile */}
        <div className="ml-auto flex items-center gap-2">
          {/* Network Switcher */}
          <div 
            className="hidden md:flex items-center rounded-lg border border-(--border-hi) bg-(--surface) p-1"
            role="group"
            aria-label="Stellar network switcher"
          >
            <button
              title="Switch to Testnet"
              onClick={() => setNetwork('TESTNET')}
              aria-pressed={network === 'TESTNET'}
              aria-label="Switch to Testnet network"
              className={`px-3 py-2 text-xs font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-accent/50 min-h-[36px] ${network === 'TESTNET' ? 'bg-(--accent)/20 text-(--accent)' : 'text-(--muted) hover:text-(--text) hover:bg-white/5'}`}
            >
              Testnet
            </button>
            <button
              title="Switch to Mainnet"
              onClick={() => setNetwork('PUBLIC')}
              aria-pressed={network === 'PUBLIC'}
              aria-label="Switch to Mainnet network"
              className={`px-3 py-2 text-xs font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-success/50 min-h-[36px] ${network === 'PUBLIC' ? 'bg-success/20 text-success' : 'text-(--muted) hover:text-(--text) hover:bg-white/5'}`}
            >
              Mainnet
            </button>
          </div>

          <div className="hidden xl:flex flex-col items-end rounded-lg border border-(--border-hi) bg-(--surface) px-3 py-1.5">
            <span className="text-[9px] uppercase tracking-wider text-(--muted)">
              {isConnecting
                ? 'Connecting wallet'
                : walletName
                  ? `${walletName} connected`
                  : 'Wallet'}
            </span>
            <span className="text-[11px] font-mono text-(--accent)">
              {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected'}
            </span>
          </div>
          <button
            type="button"
            className="p-1 rounded-lg flex items-center gap-2 cursor-pointer border border-(--border-hi) bg-(--surface) hover:bg-(--surface-hi) active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent/50 transition min-h-[44px]"
            onClick={() => setIsProfileEditorOpen(true)}
            title="Edit profile photo"
            aria-label={`Edit profile photo for ${currentUser.name}`}
          >
            <Avatar
              email={currentUser.email}
              name={currentUser.name}
              imageUrl={currentUser.imageUrl}
              size="sm"
            />
            <div className="hidden md:block flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-(--text) truncate">{currentUser.name}</p>
              <p className="text-[10px] text-(--muted) truncate">{currentUser.email}</p>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer — rendered as a fixed overlay so it never clips inside a flex ancestor */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer panel */}
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="lg:hidden fixed left-0 right-0 top-(--header-h) z-50 border-b shadow-xl animate-in slide-in-from-top-4 duration-200"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border-hi)',
            }}
          >
            <nav 
              className="flex flex-col gap-1 px-4 py-4 max-h-[calc(100dvh-var(--header-h))] overflow-y-auto"
              aria-label="Main navigation"
            >
              {navLinks}
            </nav>
          </div>
        </>
      )}

      {isProfileEditorOpen && (
        <div className="fixed inset-0 z-90 grid place-items-center bg-black/65 backdrop-blur-[2px] p-4">
          <div className="w-full max-w-sm rounded-xl border border-(--border-hi) bg-(--surface) p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-(--text)">Profile Picture</h3>
              <button
                type="button"
                className="rounded p-1 text-(--muted) hover:bg-(--surface-hi) focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                onClick={() => setIsProfileEditorOpen(false)}
                aria-label="Close profile editor"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <AvatarUpload
              email={currentUser.email}
              name={currentUser.name}
              currentImageUrl={currentUser.imageUrl}
              label="Upload Profile Photo"
              onImageUpload={(imageUrl) => {
                setUserImageUrl(imageUrl);
                localStorage.setItem('payd:user-avatar', imageUrl);
                setIsProfileEditorOpen(false);
              }}
            />
            <button
              type="button"
              className="mt-4 w-full rounded border border-(--border-hi) px-3 py-2 text-sm text-(--text) hover:bg-(--surface-hi) active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent/50 transition min-h-[44px]"
              onClick={() => {
                setUserImageUrl(undefined);
                localStorage.removeItem('payd:user-avatar');
              }}
              aria-label="Remove custom profile photo"
            >
              Remove Custom Photo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppNav;
