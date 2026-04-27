import { Icon } from '@stellar/design-system';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 sm:px-6 py-8 sm:py-12">
      <div id="tour-welcome" className="mb-8 sm:mb-10 p-6 sm:p-8 glass glow-mint rounded-full relative">
        <Icon.Rocket01 size="xl" className="text-accent relative z-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-accent opacity-5 blur-2xl rounded-full" aria-hidden="true" />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 tracking-tighter leading-none">
        {t('home.titleLine1Prefix')}{' '}
        <span className="text-accent">{t('home.titleLine1Highlight')}</span>
        <br />
        {t('home.titleLine2Prefix')}{' '}
        <span className="text-accent2">{t('home.titleLine2Highlight')}</span>
        {t('home.titleLine2Suffix')}
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mb-8 sm:mb-12 leading-relaxed font-medium px-4">
        {t('home.tagline')}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
        <button
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent text-bg font-bold rounded-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-transform shadow-lg shadow-accent/20 min-h-[48px]"
          onClick={() => {
            void navigate('/payroll');
          }}
          aria-label="Navigate to payroll management"
        >
          {t('home.ctaManagePayroll')}
        </button>
        <button
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass border-hi text-text font-bold rounded-xl hover:bg-white/5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all min-h-[48px]"
          onClick={() => {
            void navigate('/employee');
          }}
          aria-label="Navigate to employee management"
        >
          {t('home.ctaViewEmployees')}
        </button>
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left max-w-6xl w-full px-4">
        <article className="card glass noise">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 sm:mb-6 border border-accent/20">
            <Icon.CreditCard01 size="lg" className="text-accent" aria-hidden="true" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('home.card1Title')}</h2>
          <p className="text-muted text-sm leading-relaxed">{t('home.card1Body')}</p>
        </article>

        <article className="card glass noise">
          <div className="w-12 h-12 rounded-lg bg-accent2/10 flex items-center justify-center mb-4 sm:mb-6 border border-accent2/20">
            <Icon.Users01 size="lg" className="text-accent2" aria-hidden="true" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('home.card2Title')}</h2>
          <p className="text-muted text-sm leading-relaxed">{t('home.card2Body')}</p>
        </article>

        <article className="card glass noise">
          <div className="w-12 h-12 rounded-lg bg-danger/10 flex items-center justify-center mb-4 sm:mb-6 border border-danger/20">
            <Icon.ShieldTick size="lg" className="text-danger" aria-hidden="true" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('home.card3Title')}</h2>
          <p className="text-muted text-sm leading-relaxed">{t('home.card3Body')}</p>
        </article>
      </div>
    </div>
  );
}
