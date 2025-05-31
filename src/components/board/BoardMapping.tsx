import boardMembers from "@/data/BoardCards";
import BoardCard from "@/components/board/BoardCard";
import Header from "@/components/Header";

const BoardMapping = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Header text="Meet the Board!" />
      <div className="mt-10 grid grid-cols-1 gap-x-40 gap-y-20 md:grid-cols-2">
        {boardMembers.map((member, index) => (
          <BoardCard
            key={index}
            name={member.name}
            role={member.title}
            image={member.image}
            email={member.email}
            instagram={member.instagram}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardMapping;
