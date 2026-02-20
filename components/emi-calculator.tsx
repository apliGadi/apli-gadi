"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator } from "lucide-react"

interface EmiCalculatorProps {
  defaultPrice?: number
}

export function EmiCalculator({ defaultPrice = 1000000 }: EmiCalculatorProps) {
  const [price, setPrice] = useState(defaultPrice)
  const [downPayment, setDownPayment] = useState(Math.round(defaultPrice * 0.2))
  const [interest, setInterest] = useState(9.5)
  const [tenure, setTenure] = useState(48)

  const loanAmount = price - downPayment
  const monthlyRate = interest / 12 / 100
  const emi =
    monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1)
      : loanAmount / tenure

  const totalPayment = emi * tenure
  const totalInterest = totalPayment - loanAmount

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <Calculator className="h-5 w-5 text-accent" />
          EMI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">Car Price</Label>
            <span className="text-sm font-semibold text-card-foreground">
              {"₹"}{price.toLocaleString("en-IN")}
            </span>
          </div>
          <Slider
            min={100000}
            max={5000000}
            step={50000}
            value={[price]}
            onValueChange={([v]) => {
              setPrice(v)
              setDownPayment(Math.min(downPayment, v - 50000))
            }}
            className="[&_[role=slider]]:bg-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">Down Payment</Label>
            <span className="text-sm font-semibold text-card-foreground">
              {"₹"}{downPayment.toLocaleString("en-IN")}
            </span>
          </div>
          <Slider
            min={0}
            max={price - 50000}
            step={10000}
            value={[downPayment]}
            onValueChange={([v]) => setDownPayment(v)}
            className="[&_[role=slider]]:bg-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">Interest Rate</Label>
            <span className="text-sm font-semibold text-card-foreground">{interest}%</span>
          </div>
          <Slider
            min={7}
            max={18}
            step={0.5}
            value={[interest]}
            onValueChange={([v]) => setInterest(v)}
            className="[&_[role=slider]]:bg-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">Loan Tenure</Label>
            <span className="text-sm font-semibold text-card-foreground">{tenure} months</span>
          </div>
          <Slider
            min={12}
            max={60}
            step={6}
            value={[tenure]}
            onValueChange={([v]) => setTenure(v)}
            className="[&_[role=slider]]:bg-accent"
          />
        </div>

        <div className="rounded-xl bg-primary p-5 text-primary-foreground">
          <div className="mb-3 text-center">
            <p className="text-sm text-primary-foreground/60">Your Monthly EMI</p>
            <p className="text-3xl font-bold text-accent">
              {"₹"}{Math.round(emi).toLocaleString("en-IN")}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-xs text-primary-foreground/50">Loan Amount</p>
              <p className="text-sm font-semibold">{"₹"}{loanAmount.toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="text-xs text-primary-foreground/50">Total Interest</p>
              <p className="text-sm font-semibold">{"₹"}{Math.round(totalInterest).toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="text-xs text-primary-foreground/50">Total Payment</p>
              <p className="text-sm font-semibold">{"₹"}{Math.round(totalPayment).toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
