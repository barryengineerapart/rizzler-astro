Hi Francisco

We need a Desktop site that is responsive and mobile.
 * Here is the [figma for the desktop site](https://www.figma.com/proto/JBjT1WdBQmkSl4ZzNBcoMB/barryeapart-Rizzler-app?page-id=130%3A3241&node-id=136-4394&p=f&viewport=142%2C45%2C0.1&t=DHi7CwXawMFEJTpE-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=136%3A4394&hide-ui=1)
 * Here is the [figma for the mobile site](https://www.figma.com/proto/JBjT1WdBQmkSl4ZzNBcoMB/barryeapart-Rizzler-app?page-id=[…]tent-scaling=fixed&starting-point-node-id=198%3A3705&hide-ui=1)

There are some things that need to happen:
 1. This is an AstroJS site, so you must use this technology. Look at the ASTRO_README.md to get up to speed.
 2. We have also installed TailWind CSS. Please use TailWind for this site.
 3. Copy the text exactly - but please make it easy to change.
 4. Please use the "centered accordion" for the FAQ stuff (see below)

# Centered Accordion
```
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
```