"use client"

import { useState, useSyncExternalStore } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "sonner"
import {
  Plus,
  Pencil,
  Trash2,
  Car,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  IndianRupee,
} from "lucide-react"
import { carStore } from "@/lib/car-store"
import { type Car as CarType, formatPrice } from "@/lib/data"

function useCarStore() {
  return useSyncExternalStore(
    carStore.subscribe,
    carStore.getSnapshot,
    carStore.getSnapshot
  )
}

const emptyCarForm = {
  brand: "",
  model: "",
  variant: "",
  year: new Date().getFullYear(),
  kmDriven: 0,
  fuelType: "Petrol" as CarType["fuelType"],
  transmission: "Manual" as CarType["transmission"],
  registrationState: "MH",
  price: 0,
  emiStarting: 0,
  image: "/images/car-1.jpg",
  images: ["/images/car-1.jpg"],
  ownership: "1st Owner",
  color: "",
  engine: "",
  mileage: "",
  insurance: "Comprehensive",
  sold: false,
}

function CarForm({
  initial,
  onSubmit,
  submitLabel,
}: {
  initial: typeof emptyCarForm
  onSubmit: (data: typeof emptyCarForm) => void
  submitLabel: string
}) {
  const [form, setForm] = useState(initial)

  const update = (field: string, value: string | number | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex max-h-[70vh] flex-col gap-4 overflow-y-auto pr-2">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label>Brand</Label>
          <Input value={form.brand} onChange={(e) => update("brand", e.target.value)} placeholder="e.g. Maruti Suzuki" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Model</Label>
          <Input value={form.model} onChange={(e) => update("model", e.target.value)} placeholder="e.g. Swift" required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label>Variant</Label>
          <Input value={form.variant} onChange={(e) => update("variant", e.target.value)} placeholder="e.g. VXI" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Year</Label>
          <Input type="number" value={form.year} onChange={(e) => update("year", Number(e.target.value))} min={2000} max={2026} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label>KM Driven</Label>
          <Input type="number" value={form.kmDriven} onChange={(e) => update("kmDriven", Number(e.target.value))} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Color</Label>
          <Input value={form.color} onChange={(e) => update("color", e.target.value)} placeholder="e.g. White" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label>Fuel Type</Label>
          <Select value={form.fuelType} onValueChange={(v) => update("fuelType", v)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Petrol">Petrol</SelectItem>
              <SelectItem value="Diesel">Diesel</SelectItem>
              <SelectItem value="CNG">CNG</SelectItem>
              <SelectItem value="Electric">Electric</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Transmission</Label>
          <Select value={form.transmission} onValueChange={(v) => update("transmission", v)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Manual">Manual</SelectItem>
              <SelectItem value="Automatic">Automatic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label>Engine</Label>
          <Input value={form.engine} onChange={(e) => update("engine", e.target.value)} placeholder="e.g. 1197 cc" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Mileage</Label>
          <Input value={form.mileage} onChange={(e) => update("mileage", e.target.value)} placeholder="e.g. 22 km/l" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label>Price (Rs)</Label>
          <Input type="number" value={form.price} onChange={(e) => update("price", Number(e.target.value))} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>EMI Starting (Rs/mo)</Label>
          <Input type="number" value={form.emiStarting} onChange={(e) => update("emiStarting", Number(e.target.value))} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label>Ownership</Label>
          <Select value={form.ownership} onValueChange={(v) => update("ownership", v)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="1st Owner">1st Owner</SelectItem>
              <SelectItem value="2nd Owner">2nd Owner</SelectItem>
              <SelectItem value="3rd Owner">3rd Owner</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Insurance</Label>
          <Select value={form.insurance} onValueChange={(v) => update("insurance", v)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Comprehensive">Comprehensive</SelectItem>
              <SelectItem value="Third Party">Third Party</SelectItem>
              <SelectItem value="Expired">Expired</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Registration State</Label>
        <Input value={form.registrationState} onChange={(e) => update("registrationState", e.target.value)} placeholder="e.g. MH" />
      </div>
      <DialogFooter className="pt-2">
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => onSubmit(form)}>
          {submitLabel}
        </Button>
      </DialogFooter>
    </div>
  )
}

export default function AdminPage() {
  const cars = useCarStore()
  const [editingCar, setEditingCar] = useState<CarType | null>(null)
  const [addOpen, setAddOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const totalCars = cars.length
  const availableCars = cars.filter((c) => !c.sold).length
  const soldCars = cars.filter((c) => c.sold).length
  const totalValue = cars.filter((c) => !c.sold).reduce((sum, c) => sum + c.price, 0)

  const handleAdd = (data: typeof emptyCarForm) => {
    carStore.addCar(data)
    setAddOpen(false)
    toast.success("Car added successfully!")
  }

  const handleEdit = (data: typeof emptyCarForm) => {
    if (editingCar) {
      carStore.updateCar(editingCar.id, data)
      setEditOpen(false)
      setEditingCar(null)
      toast.success("Car updated successfully!")
    }
  }

  const handleDelete = (id: string) => {
    carStore.deleteCar(id)
    toast.success("Car deleted successfully!")
  }

  const toggleSold = (car: CarType) => {
    if (car.sold) {
      carStore.markAvailable(car.id)
      toast.success("Car marked as available!")
    } else {
      carStore.markSold(car.id)
      toast.success("Car marked as sold!")
    }
  }

  return (
    <div className="min-h-screen">
      {/* Admin Header */}
      <header className="border-b border-border bg-card px-4 py-4 lg:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Site</span>
            </Link>
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-accent" />
              <h1 className="text-xl font-bold text-foreground">Admin Panel</h1>
            </div>
          </div>
          <Dialog open={addOpen} onOpenChange={setAddOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <Plus className="h-4 w-4" />
                Add Car
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Car</DialogTitle>
              </DialogHeader>
              <CarForm initial={emptyCarForm} onSubmit={handleAdd} submitLabel="Add Car" />
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-border bg-card">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Car className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{totalCars}</p>
                <p className="text-xs text-muted-foreground">Total Cars</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{availableCars}</p>
                <p className="text-xs text-muted-foreground">Available</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <XCircle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{soldCars}</p>
                <p className="text-xs text-muted-foreground">Sold</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <IndianRupee className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{"₹"}{formatPrice(totalValue)}</p>
                <p className="text-xs text-muted-foreground">Inventory Value</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Car Table */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Car Inventory</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Car</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Fuel</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>EMI</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cars.map((car) => (
                  <TableRow key={car.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded">
                          <Image src={car.image} alt={car.model} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-card-foreground">{car.brand} {car.model}</p>
                          <p className="text-xs text-muted-foreground">{car.variant}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{car.year}</TableCell>
                    <TableCell className="text-sm">{car.fuelType}</TableCell>
                    <TableCell className="text-sm font-medium">{"₹"}{formatPrice(car.price)}</TableCell>
                    <TableCell className="text-sm">{"₹"}{car.emiStarting.toLocaleString("en-IN")}</TableCell>
                    <TableCell>
                      <button onClick={() => toggleSold(car)}>
                        <Badge
                          variant={car.sold ? "secondary" : "default"}
                          className={car.sold ? "bg-orange-100 text-orange-700 hover:bg-orange-200 cursor-pointer" : "bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"}
                        >
                          {car.sold ? "Sold" : "Available"}
                        </Badge>
                      </button>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        <Dialog open={editOpen && editingCar?.id === car.id} onOpenChange={(open) => {
                          setEditOpen(open)
                          if (!open) setEditingCar(null)
                        }}>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setEditingCar(car)}
                              className="h-8 w-8"
                            >
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Edit Car</DialogTitle>
                            </DialogHeader>
                            {editingCar && (
                              <CarForm
                                initial={{
                                  brand: editingCar.brand,
                                  model: editingCar.model,
                                  variant: editingCar.variant,
                                  year: editingCar.year,
                                  kmDriven: editingCar.kmDriven,
                                  fuelType: editingCar.fuelType,
                                  transmission: editingCar.transmission,
                                  registrationState: editingCar.registrationState,
                                  price: editingCar.price,
                                  emiStarting: editingCar.emiStarting,
                                  image: editingCar.image,
                                  images: editingCar.images,
                                  ownership: editingCar.ownership,
                                  color: editingCar.color,
                                  engine: editingCar.engine,
                                  mileage: editingCar.mileage,
                                  insurance: editingCar.insurance,
                                  sold: editingCar.sold,
                                }}
                                onSubmit={handleEdit}
                                submitLabel="Save Changes"
                              />
                            )}
                          </DialogContent>
                        </Dialog>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Car</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete {car.brand} {car.model} {car.variant}? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(car.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
