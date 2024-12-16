import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export function generatePlaceholderImage(name: string, size: number = 32) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&size=${size}&background=random`
} 