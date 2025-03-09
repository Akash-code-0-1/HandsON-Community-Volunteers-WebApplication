"use client"

import { useState, useTransition } from "react"

export function useActionState<T>(action: any) {
  const [state, setState] = useState<T | null>(null)
  const [isPending, startTransition] = useTransition()

  const actionWithState = (formData: FormData) => {
    startTransition(async () => {
      const result = await action(formData)
      setState(result)
    })
  }

  return [state, actionWithState, isPending] as const
}

