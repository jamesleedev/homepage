# Homepage

This is my personal website. Here's the link: [www.jamesl.dev](https://www.jamesl.dev)

Currently being run on a single Hetzner cpx11 cloud instance behind Nginx. 

# Run/Build

## Development

`pnpm install`

`pnpm run dev`

## Deploy

`sh ./scripts/start-docker.sh`

This will build the dockerfile with the current tag of master as the version, then shutdown and delete old versions.

# FAQs

## Why is this in Next.js? Isn't that overkill?

Yes. However, I just think my own homepage should be built on what I know best. It was also a great learning experience setting up a project from scratch and experimenting with new build tools back in the day.

## Why does this look so... old and basic?

1. I'm not a great designer. Obviously I've gained some insights and an eye for best practices, but I feel way more creatively fulfiled with problem solving.
2. The website itself is basic, and I want interactions to feel instant and snappy.

## Why is it so... green?

[British racing green](https://en.wikipedia.org/wiki/British_racing_green) is my favourite colour, so I went for the closest Tailwind palette, Emerald. Then again, `emerald-900` looks pretty great too.

