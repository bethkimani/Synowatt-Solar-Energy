
import { Counter } from '../Counter';
import { Reveal } from '../Reveal';
import { stats } from '../../data/hero';

interface StatItem {
  label: string;
  value?: number;
  decimals?: number;
  suffix?: string;
  text?: string;
}

export function Stats() {
  return (
    <section
      aria-label="Synowatt at a glance"
      className="relative z-20 -mt-14 px-5 sm:-mt-16 lg:px-8"
    >
      <Reveal className="mx-auto max-w-7xl">
        <dl
          className="
            grid
            grid-cols-1
            overflow-hidden
            rounded-2xl
            bg-white
            shadow-[0_20px_60px_rgba(34,34,34,0.12)]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat: StatItem, index: number) => {
            const isSecondColumn = index % 2 === 1;
            const isSecondRow = index >= 2;

            return (
              <div
                key={stat.label}
                className={`
                  group
                  relative
                  flex
                  min-h-[145px]
                  flex-col
                  justify-center
                  gap-2
                  px-6
                  py-7
                  transition-colors
                  duration-200
                  hover:bg-brand-dark/[0.025]

                  sm:px-7
                  sm:py-8

                  lg:min-h-[165px]
                  lg:px-8
                  lg:py-9

                  ${
                    isSecondColumn
                      ? 'sm:border-l sm:border-ink/10'
                      : ''
                  }

                  ${
                    isSecondRow
                      ? 'sm:border-t sm:border-ink/10 lg:border-t-0'
                      : ''
                  }

                  ${
                    index > 0
                      ? 'lg:border-l lg:border-ink/10'
                      : ''
                  }
                `}
              >
                {/* Small accent indicator */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-6
                    top-6
                    h-1
                    w-7
                    rounded-full
                    bg-accent
                    transition-all
                    duration-200
                    group-hover:w-10

                    sm:left-7
                    sm:top-7

                    lg:left-8
                    lg:top-8
                  "
                />

                {/* Value */}
                <dd
                  className="
                    mt-3
                    font-display
                    text-[27px]
                    font-extrabold
                    leading-none
                    tracking-tight
                    text-brand-dark

                    sm:text-[30px]

                    lg:text-[32px]
                  "
                >
                  {stat.value !== undefined ? (
                    <Counter
                      value={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  ) : (
                    stat.text
                  )}
                </dd>

                {/* Description */}
                <dt
                  className="
                    max-w-[220px]
                    text-sm
                    font-medium
                    leading-relaxed
                    text-ink/60

                    sm:text-[15px]
                  "
                >
                  {stat.label}
                </dt>
              </div>
            );
          })}
        </dl>
      </Reveal>
    </section>
  );
}

