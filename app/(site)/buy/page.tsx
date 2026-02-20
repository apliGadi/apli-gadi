"use client"

import { useState, useMemo } from "react"
import { CarCard } from "@/components/car-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { cars } from "@/lib/data"

const brands = Array.from(new Set(cars.map((c) => c.brand)))
const fuelTypes = Array.from(new Set(cars.map((c) => c.fuelType)))
const transmissions = Array.from(new Set(cars.map((c) => c.transmission)))
const budgetRanges = [
  { label: "Under 5 Lakh", min: 0, max: 500000 },
  { label: "5 - 10 Lakh", min: 500000, max: 1000000 },
  { label: "10 - 20 Lakh", min: 1000000, max: 2000000 },
  { label: "20 - 50 Lakh", min: 2000000, max: 5000000 },
  { label: "Above 50 Lakh", min: 5000000, max: Infinity },
]

export default function BuyPage() {
  const [search, setSearch] = useState("")
  const [brand, setBrand] = useState("all")
  const [fuel, setFuel] = useState("all")
  const [transmission, setTransmission] = useState("all")
  const [budget, setBudget] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    return cars.filter((car) => {
      if (car.sold) return false

      const q = search.toLowerCase()
      if (q && !`${car.brand} ${car.model} ${car.variant}`.toLowerCase().includes(q)) return false

      if (brand !== "all" && car.brand !== brand) return false
      if (fuel !== "all" && car.fuelType !== fuel) return false
      if (transmission !== "all" && car.transmission !== transmission) return false

      if (budget !== "all") {
        const range = budgetRanges[Number(budget)]
        if (range && (car.price < range.min || car.price >= range.max)) return false
      }

      return true
    })
  }, [search, brand, fuel, transmission, budget])

  const clearFilters = () => {
    setSearch("")
    setBrand("all")
    setFuel("all")
    setTransmission("all")
    setBudget("all")
  }

  const hasFilters = search || brand !== "all" || fuel !== "all" || transmission !== "all" || budget !== "all"

  return (
    <div className="bg-background py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Buy a Car
          </h1>
          <p className="mt-2 text-muted-foreground">
            Browse our collection of verified pre-owned cars in Nagpur
          </p>
        </div>

        {/* Search + Filter Toggle */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by brand, model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline">Filters</span>
          </Button>
          {hasFilters && (
            <Button variant="ghost" onClick={clearFilters} className="gap-2 text-accent">
              <X className="h-4 w-4" />
              <span className="hidden sm:inline">Clear</span>
            </Button>
          )}
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mb-6 grid gap-4 rounded-xl border border-border bg-card p-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm text-muted-foreground">Budget</Label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Budget</SelectItem>
                  {budgetRanges.map((r, i) => (
                    <SelectItem key={i} value={String(i)}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm text-muted-foreground">Brand</Label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Brand</SelectItem>
                  {brands.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm text-muted-foreground">Fuel Type</Label>
              <Select value={fuel} onValueChange={setFuel}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Fuel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Fuel Type</SelectItem>
                  {fuelTypes.map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm text-muted-foreground">Transmission</Label>
              <Select value={transmission} onValueChange={setTransmission}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Transmission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Transmission</SelectItem>
                  {transmissions.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Results */}
        <p className="mb-4 text-sm text-muted-foreground">
          Showing {filtered.length} car{filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-16 text-center">
            <Search className="mb-4 h-12 w-12 text-muted-foreground/30" />
            <h3 className="text-lg font-semibold text-card-foreground">No cars found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
