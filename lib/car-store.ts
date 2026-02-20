import { cars as initialCars, type Car } from "@/lib/data"

// Client-side store that persists across components using module-level state
// In production, this would connect to a database
let carInventory: Car[] = [...initialCars]
let listeners: Array<() => void> = []

function notify() {
  listeners.forEach((l) => l())
}

export const carStore = {
  getCars(): Car[] {
    return carInventory
  },

  getCar(id: string): Car | undefined {
    return carInventory.find((c) => c.id === id)
  },

  addCar(car: Omit<Car, "id">): Car {
    const newCar: Car = {
      ...car,
      id: Date.now().toString(),
    }
    carInventory = [...carInventory, newCar]
    notify()
    return newCar
  },

  updateCar(id: string, updates: Partial<Car>): Car | undefined {
    const index = carInventory.findIndex((c) => c.id === id)
    if (index === -1) return undefined
    carInventory = carInventory.map((c) =>
      c.id === id ? { ...c, ...updates } : c
    )
    notify()
    return carInventory[index]
  },

  deleteCar(id: string): boolean {
    const len = carInventory.length
    carInventory = carInventory.filter((c) => c.id !== id)
    notify()
    return carInventory.length < len
  },

  markSold(id: string): Car | undefined {
    return this.updateCar(id, { sold: true })
  },

  markAvailable(id: string): Car | undefined {
    return this.updateCar(id, { sold: false })
  },

  subscribe(listener: () => void): () => void {
    listeners = [...listeners, listener]
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  },

  getSnapshot(): Car[] {
    return carInventory
  },
}
