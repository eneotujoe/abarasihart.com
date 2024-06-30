import React from 'react'

import { ServicesCard } from '@/components/cards'

export default function Services() {
  return (
	<section className="flex flex-col justify-center items-center my-5">
		<div className="grid grid-cols-1">
			<h1 className="font-black text-4xl">Services</h1>
		</div>

		<div className="prose dark:prose-invert my-4">
			<ServicesCard>
				<p>Catalyst Design and Engineering for clean fuel, sustainable chemicals, pollution and waste control.</p>
			</ServicesCard>

			<ServicesCard>
				<p>Enhanced Oil Recovery, Heavy Oil Upgrading, and Bitumen Extraction.</p>
			</ServicesCard>

			<ServicesCard>
				<p>Resource recovery from waste. Valorisation of waste such as biomass, bio-waste, e-waste, plastics, waste shells and bones for energy carriers, biomaterials, catalyst, adsorbent, and chemicals.						</p>
			</ServicesCard>

			<ServicesCard>
				<p>Biomass Conversion Technologies, Bioenergy, and Bioproducts.</p>
			</ServicesCard>

			<ServicesCard>
				<p>Battery electrode processing.</p>
			</ServicesCard>

			<ServicesCard>
				<p>Remediation of crude oil contaminated land.</p>
			</ServicesCard>
		</div>

	</section>
  )
}



