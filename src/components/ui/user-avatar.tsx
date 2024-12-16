'use client'

import Image from 'next/image'
import { generatePlaceholderImage } from '@/lib/utils'

interface UserAvatarProps {
  name: string
  size?: number
  className?: string
}

export function UserAvatar({ name, size = 32, className = '' }: UserAvatarProps) {
  return (
    <Image
      src={generatePlaceholderImage(name, size)}
      alt={`${name}'s avatar`}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
    />
  )
} 