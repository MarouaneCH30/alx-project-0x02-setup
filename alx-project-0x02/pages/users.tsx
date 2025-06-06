import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

export default function Users() {
const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
];
  return (
    <>
    <Header />
      {users.map((user) => (
        <UserCard name={user.name} email={user.email} phone={user.phone} key={user.name} />
      ))}
    </>
  );
}