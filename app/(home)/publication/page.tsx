import React from 'react'

import { publications } from '@/data/publication'
import { ContentCard } from '@/components/cards'
import Link from "next/link"
export default function Publication() {
  return (
	<section className="grid md:grid-cols-4 grid-cols-1 gap-3 m-3">
		{publications.map(({url, title, text}) => (
			<ContentCard title={title} href={url} key={url} >
			</ContentCard>
		))}
	</section>
  )
}
