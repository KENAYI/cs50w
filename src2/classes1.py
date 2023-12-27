class Flight:

    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

# Adds passengers if seats are available
    def add_passenger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

# Returns seats that are left
    def open_seats(self):
        return self.capacity - len(self.passengers)


flight = Flight(capacity=5)

people = ["Kenayi", "Eudora", "Odiri", "Oma", "Dubayi", "Laura"]
for person in people:
    if flight.add_passenger(person):
        print(f"Added {person} to flight.")
    else:
        print(f"No available seats for {person}.")
