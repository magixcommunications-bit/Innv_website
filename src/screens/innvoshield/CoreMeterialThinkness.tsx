import { useEffect } from 'react'

export default function CoreMeterialThinkness() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')

          // Animate the spec bar fill after visible
          if (entry.target.classList.contains('spec-item')) {
            const fill = entry.target.querySelector('.spec-fill')
            if (fill) {
              setTimeout(() => {
                fill.classList.add('animate')
              }, 200)
            }
          }

          // Stop observing once animated (optional)
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all animated elements
    const elements = document.querySelectorAll('.spec-item')
    elements.forEach((el) => observer.observe(el))

    // Cleanup on unmount
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>
        {`
                 :root {
            --pastel-blue: #A8D8EA;
            --pastel-purple: #D4A5D4;
            --pastel-pink: #FFB6C1;
            --pastel-mint: #B5EAD7;
            --pastel-peach: #FFD4B2;
            --pastel-lavender: #E6E6FA;
            --dark-text: #2C3E50;
            --light-text: #5A6C7D;
        }

         
         /* Specifications Section */
      

        .specs-container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .spec-item {
            margin-bottom: 2rem;
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.6s ease;
        }

        .spec-item.visible {
            opacity: 1;
            transform: translateX(0);
        }

        .spec-label {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--dark-text);
        }

        .spec-bar {
            height: 30px;
            background: var(--pastel-lavender);
            border-radius: 15px;
            overflow: hidden;
            position: relative;
        }

        .spec-fill {
            height: 100%;
            // background: linear-gradient(90deg, var(--pastel-purple), var(--pastel-pink));
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            transition: width 1s ease;
            width: 0;
        }

        .spec-fill.animate {
            width: var(--width);
        }

            
            `}
      </style>
      <div className="relative bg-neutral-100">
        <div className="relative z-10 h-auto py-20 max-w-[1440px] mx-auto px-4  md:px-10 lg:px-16 2xl:px-0">
          <div className="flex flex-col items-center gap-6 mb-16 text-center gsap-opacity-trans-appear">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl text-[#0a2463]">
              Core Material Thickness Options
            </h2>
            <p className="text-lg text-center sm:text-xl md:text-2xl">
              Available in multiple lead equivalency options to meet your
              specific protection requirements.
            </p>
          </div>

          <section className="specs-section">
            <div className="specs-container">
              <div className="spec-item animate-on-scroll">
                <div className="spec-label">0.25 mmPb</div>
                <div className="spec-bar">
                  <div
                    className="spec-fill"
                    style={{
                      ['--width' as any]: '33%',
                      backgroundColor: '#ba82ee',
                    }}
                  >
                    Standard
                  </div>
                </div>
              </div>
              <div className="spec-item animate-on-scroll">
                <div className="spec-label">0.35 mmPb</div>
                <div className="spec-bar">
                  <div
                    className="spec-fill"
                    style={{
                      ['--width' as any]: '66%',
                      backgroundColor: '#5e93f1',
                    }}
                  >
                    Enhanced
                  </div>
                </div>
              </div>
              <div className="spec-item animate-on-scroll">
                <div className="spec-label">0.50 mmPb</div>
                <div className="spec-bar">
                  <div
                    className="spec-fill"
                    style={{
                      ['--width' as any]: '100%',
                      backgroundColor: '#f67f3e',
                    }}
                  >
                    Maximum
                  </div>
                </div>
              </div>
              <p
                style={{
                  textAlign: 'center',
                  marginTop: '2rem',
                  color: 'var(--light-text)',
                  fontStyle: 'italic',
                }}
              >
                Custom lead equivalency options available on request
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
