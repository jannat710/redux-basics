interface IProps {
  user: IUser;
}

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { IUser } from "@/types";

// }
const UserCard = ({ user }: IProps) => {
  //   const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1>{user.name}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
