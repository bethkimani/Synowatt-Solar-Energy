import { Counter } from "../Counter";
import { Reveal } from "../Reveal";
import { stats } from "@/data/hero";

const GREEN = "#00A83B";
const GREEN_SOFT = "rgba(0, 168, 59, 0.15)";

export function Stats() {
  return (
    <section
      aria-label="Synowatt at a glance"
      className="relative z-10 -mt-14 px-5 lg:px-8"
    >
      <Reveal className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(34,34,34,0.12)] lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col-reverse gap-1 border-solid p-5 sm:p-7 ${
                i % 2 === 1 ? "border-l" : ""
              } ${
                i > 1 ? "border-t lg:border-t-0" : ""
              } ${
                i === 2 ? "lg:border-l" : ""
              }`}
              style={{
                borderColor: GREEN_SOFT,
              }}
            >
              <dt
                className="text-sm"
                style={{
                  color: GREEN,
                }}
              >
                {stat.label}
              </dt>

              <dd
                className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-[28px]"
                style={{
                  color: GREEN,
                }}
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
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

export default Stats;