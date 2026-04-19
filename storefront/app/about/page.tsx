import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Flame, Globe2, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'How Koffa started — direct-trade single-origin coffee, roasted in Lagos.',
}

const ORIGIN_IMAGE =
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1600&q=80'
const ROASTER_IMAGE =
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1600&q=80'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={ORIGIN_IMAGE}
            alt="Coffee farm"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground" />
        </div>
        <div className="container-custom relative py-24 lg:py-32 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-5">— Est. 2021 · Lagos</p>
          <h1 className="font-heading font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.5rem,7vw,5.5rem)] max-w-4xl mx-auto">
            A coffee company <br />
            <span className="italic font-normal text-accent normal-case">
              built on relationships.
            </span>
          </h1>
          <p className="mt-7 max-w-xl mx-auto text-primary-foreground/70 leading-relaxed">
            We don&rsquo;t buy coffee off commodity exchanges. We buy it from farmers
            we&rsquo;ve sat with, over harvests we&rsquo;ve watched ripen.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-section">
        <div className="container-custom grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
              — How it started
            </p>
            <h2 className="text-h2 font-heading font-bold">
              One roaster. One promise.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-foreground text-lg font-heading">
              Koffa started in 2021 as a single refurbished 1956 Probat drum in a
              warehouse behind a paint shop in Yaba, Lagos.
            </p>
            <p>
              Our founder, Chinedu, had just come back from six months of cupping
              sessions across the Sidamo and Yirgacheffe growing regions. He&rsquo;d
              watched farmers sell 90-point lots into anonymous commodity bags for
              the same price as 75-point lots — because the supply chain never
              bothered to taste the difference.
            </p>
            <p>
              So we built a company that does. We pay direct. We cup every lot.
              We roast in batches small enough that the head roaster still tastes
              every one by hand. And we ship within 24 hours of roast — because
              fresh coffee is the only kind worth drinking.
            </p>
            <p>
              Today we work with 28 farms across Ethiopia, Kenya, and Rwanda — and
              we ship to homes across Nigeria and the US every week.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-section bg-foreground text-primary-foreground">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '28', label: 'Partner farms', icon: Globe2 },
            { value: '8kg', label: 'Batch size', icon: Flame },
            { value: '24h', label: 'Roast to ship', icon: Heart },
            { value: '100%', label: 'Direct-trade', icon: Leaf },
          ].map(({ value, label, icon: Icon }) => (
            <div key={label}>
              <Icon className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
              <p className="font-heading text-5xl font-bold">{value}</p>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The roastery */}
      <section className="py-section">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={ROASTER_IMAGE}
              alt="Koffa roastery in Lagos"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">
              — The roastery
            </p>
            <h2 className="text-h2 font-heading font-bold">
              Yaba, Lagos — Nigeria
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our roastery opens to the public every Saturday morning for free
              cuppings. Bring a friend. Bring a mug. We&rsquo;ll pour six origins,
              side by side, and let the beans do the talking.
            </p>
            <p className="text-sm text-muted-foreground">
              7A Adelabu St, Yaba · Saturdays, 9am – 12pm
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pt-4 hover:text-accent transition-colors"
              prefetch={true}
            >
              Shop the roast
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
