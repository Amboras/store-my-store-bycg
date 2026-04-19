'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Truck,
  Shield,
  Leaf,
  Flame,
  MapPin,
  Star,
  Coffee,
} from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80'
const HERO_SECONDARY =
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80'
const EDITORIAL_1 =
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=80'
const EDITORIAL_2 =
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=80'
const RITUAL_IMAGE =
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80'

const marqueeWords = [
  'Single-Origin',
  'Direct Trade',
  'Fire-Roasted',
  'Small Batch',
  'Shipped in 24h',
  'Ethically Sourced',
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', { content_name: 'newsletter_signup', status: 'submitted' })
    setSubmitted(true)
  }

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-foreground text-primary-foreground overflow-hidden">
        <div className="container-custom relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch py-16 lg:py-24 min-h-[85vh]">
          {/* LEFT — Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between z-10 animate-fade-in-up">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
              <span className="h-px w-8 bg-accent" />
              <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
              Roasted in Lagos · Est. 2021
            </div>

            <div className="mt-10 space-y-7">
              <h1 className="font-heading font-bold uppercase leading-[0.95] tracking-tight text-[clamp(3rem,8vw,6.5rem)]">
                Coffee with
                <br />
                <span className="italic font-normal text-accent normal-case">a story</span>
                <br />
                in every bean.
              </h1>
              <p className="text-base lg:text-lg text-primary-foreground/70 max-w-md leading-relaxed">
                Direct-trade beans from the highlands of Ethiopia, Kenya and
                Rwanda. Fire-roasted in small 8kg batches. Shipped within 24
                hours of roast — so it tastes like it should.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:brightness-110 transition-all"
                  prefetch={true}
                >
                  Shop The Roast
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground hover:text-foreground transition-colors"
                  prefetch={true}
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* Hero stat row */}
            <div className="mt-14 grid grid-cols-3 gap-4 pt-8 border-t border-primary-foreground/15">
              <div>
                <p className="font-heading text-3xl font-bold text-accent">12k+</p>
                <p className="text-[11px] uppercase tracking-widest text-primary-foreground/60 mt-1">
                  Bags shipped
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-accent">24h</p>
                <p className="text-[11px] uppercase tracking-widest text-primary-foreground/60 mt-1">
                  Roast to ship
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-accent">4.9★</p>
                <p className="text-[11px] uppercase tracking-widest text-primary-foreground/60 mt-1">
                  Customer rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Image collage */}
          <div className="lg:col-span-6 relative grid grid-cols-5 grid-rows-6 gap-3 min-h-[480px]">
            <div className="col-span-5 row-span-4 relative overflow-hidden rounded-sm group">
              <Image
                src={HERO_IMAGE}
                alt="Freshly brewed Koffa pour-over"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/70">
                    Bestseller
                  </p>
                  <p className="font-heading text-2xl font-semibold">Signature Blend</p>
                </div>
                <Link
                  href="/products"
                  className="h-11 w-11 flex items-center justify-center bg-accent text-accent-foreground rounded-full hover:scale-110 transition-transform"
                  aria-label="Shop signature blend"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="col-span-3 row-span-2 relative overflow-hidden rounded-sm">
              <Image
                src={HERO_SECONDARY}
                alt="Coffee beans close-up"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>

            <div className="col-span-2 row-span-2 bg-accent text-accent-foreground rounded-sm p-4 flex flex-col justify-between">
              <Flame className="h-6 w-6" strokeWidth={1.75} />
              <div>
                <p className="font-heading text-2xl font-bold leading-none">Fresh.</p>
                <p className="text-[11px] uppercase tracking-widest mt-1 opacity-90">
                  Roasted this week
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="border-t border-primary-foreground/10 bg-foreground/80 overflow-hidden">
          <div className="marquee-track flex gap-10 py-4 whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
              <span
                key={i}
                className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70"
              >
                {word}
                <Coffee className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VALUE PROPS STRIP ===================== */}
      <section className="py-10 border-b bg-background">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Flame, label: 'Roasted in Lagos', sub: 'Small 8kg batches' },
            { icon: Leaf, label: 'Direct-trade', sub: '28 farmer partners' },
            { icon: Truck, label: 'Free shipping', sub: 'Orders over $45' },
            { icon: Shield, label: 'Freshness promise', sub: 'Or your money back' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FEATURED PRODUCTS ===================== */}
      <section className="py-section">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
                — The Collection
              </p>
              <h2 className="text-h2 font-heading font-bold max-w-lg">
                Coffee you can taste the difference in.
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide link-underline pb-0.5 whitespace-nowrap"
              prefetch={true}
            >
              Shop all coffees
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded animate-pulse" />
              ))}
            </div>
          ) : collections && collections.length > 0 ? (
            <>
              {collections.map(
                (
                  collection: {
                    id: string
                    handle: string
                    title: string
                    metadata?: Record<string, unknown>
                  },
                  index: number,
                ) => (
                  <div key={collection.id} className={index > 0 ? 'mt-16' : ''}>
                    <CollectionSection collection={collection} alternate={false} />
                  </div>
                ),
              )}
            </>
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <Coffee className="h-10 w-10 mx-auto mb-4 text-accent" strokeWidth={1.5} />
              <p className="text-sm">Our coffees are being roasted. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===================== ORIGIN STORY / EDITORIAL ===================== */}
      <section className="py-section bg-foreground text-primary-foreground">
        <div className="container-custom grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">— From the source</p>
            <h2 className="text-h2 font-heading font-bold leading-tight">
              From farm to cup,
              <br />
              <span className="italic font-normal text-accent normal-case">in eleven days.</span>
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed">
              We work directly with 28 smallholder farms across the East African
              Rift. No middlemen, no commodity trading floors — just green beans
              bagged at origin, shipped to our Lagos roastery, and roasted the
              week you order.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                'Cupped and scored 85+ by our head roaster',
                'Roasted in 8kg batches on a 1956 Probat drum',
                'Bagged with a one-way valve for peak freshness',
                'Tracked from farm to your doorstep',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-primary-foreground/85">{line}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pt-4 text-accent hover:gap-3 transition-all"
              prefetch={true}
            >
              Read our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-6 gap-3 h-[540px]">
            <div className="col-span-4 row-span-2 relative overflow-hidden rounded-sm">
              <Image
                src={EDITORIAL_1}
                alt="Coffee farm"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-sm">
              <Image
                src={EDITORIAL_2}
                alt="Roasting process"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-sm bg-accent p-5 flex flex-col justify-between">
              <p className="text-xs uppercase tracking-[0.25em] text-accent-foreground/80">
                Cupping score
              </p>
              <div>
                <p className="font-heading text-5xl font-bold text-accent-foreground leading-none">
                  87.5
                </p>
                <p className="text-xs text-accent-foreground/80 mt-2">
                  Avg. SCA score across our current lots
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE RITUAL ===================== */}
      <section className="py-section">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={RITUAL_IMAGE}
              alt="Morning coffee ritual"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-background/95 backdrop-blur px-4 py-3 max-w-[240px]">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xs italic leading-snug">
                &ldquo;Honestly the best cup of coffee I&rsquo;ve had at home. Period.&rdquo;
              </p>
              <p className="text-[11px] uppercase tracking-widest mt-2 text-muted-foreground">
                — Adaeze O., Lagos
              </p>
            </div>
          </div>
          <div className="space-y-6 lg:max-w-md">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">— The Ritual</p>
            <h2 className="text-h2 font-heading font-bold">
              Slow mornings deserve better beans.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether it&rsquo;s pour-over before the city wakes up or a flat-white
              shared with someone you love — Koffa is made for the pause. The
              breath. The moment before the day takes over.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4 border-t">
              <div>
                <p className="font-heading text-2xl font-bold">28</p>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                  Farms
                </p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold">3</p>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                  Origins
                </p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold">100%</p>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                  Arabica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== NEWSLETTER ===================== */}
      <section className="py-section bg-muted/40 border-t">
        <div className="container-custom max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            — Join the club
          </p>
          <h2 className="text-h2 font-heading font-bold">
            Get 10% off your first bag.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Brewing tips, new single-origins, and early access to limited roasts — straight to your inbox.
          </p>

          {submitted ? (
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-accent font-semibold">
              <Coffee className="h-4 w-4" />
              Thanks — check your inbox for your code.
            </div>
          ) : (
            <form
              className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 border bg-background px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-foreground text-background px-6 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-accent transition-colors whitespace-nowrap"
              >
                Get 10% off
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-muted-foreground">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  )
}
