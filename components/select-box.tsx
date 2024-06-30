import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectModel() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="openai-gpt-4o" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>LLM</SelectLabel>
          <SelectItem value="openai-gpt-4o">OpenAI gpt-4o</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

