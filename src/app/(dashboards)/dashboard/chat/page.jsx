import StreamChats from "@/components/StreamChat/StreamChats";
import { currentUser } from "@clerk/nextjs/server";

export const metadata = {
  title: "Chat | TeamCraft",
  description: "Chat for TeamCraft",
}

const Chat = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const userData = {
    id: user.id,
    ...(user.fullName ? { name: user.fullName } : {}),
    ...(user.imageUrl ? { image: user.imageUrl } : {}),
  };

  return (
    <>
      <StreamChats userData={userData} />
    </>
  );
};

export default Chat;
