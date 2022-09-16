CREATE TABLE expenses (
  id serial PRIMARY KEY,
  amount numeric(6, 2) NOT NULL CHECK(amount >= 0.01),
  memo text NOT NULL,
  createdon date NOT NULL DEFAULT current_date);