'use client'

import React from 'react'
import { useChat } from 'ai/react'

import { OpenaiIcon, UserIcon } from '@/components/icon'
import { cn } from '@/lib/utils'
import { SelectModel } from '@/components/select-box'

export default function GPTPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="grid grid-cols-1 sm:grid-cols- mx-auto">
      <div className="w-full max-w-md mx-auto">
        <div className="navbar bg-secondary text-secondary-foreground rounded mt-1 p-1">
          <SelectModel />
        </div>
      </div>

      <div className="card flex flex-col w-full max-w-md pb-24 mx-auto">
        <div className='min-h-60'>
          {messages.map(message => (
            <div key={message.id}
              className={cn(
                'flex items-start whitespace-pre-wrap text-secondary-foreground rounded gap-1 my-1 p-1',
                message.role === 'user'
                  ? 'border border-secondary rounded'
                  : 'bg-secondary mb-8'
              )}
            >
              <div>
                {message.role === 'user' ? (<UserIcon />) : (<OpenaiIcon />)}
              </div>
              <div className='pt-2'>
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-secondary text-secondary-foreground rounded focus:border-secondary-content bg-secondary shadow-xl"
            value={input}
            placeholder="Type something..."
            onChange={handleInputChange}
            />
        </form>
      </div>
    </div>
  )
}
