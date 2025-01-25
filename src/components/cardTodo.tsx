"use client";

import {
  CardContent,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Trash2, Pencil } from "lucide-react";
import EditTodos from "./editTodos";
import { Button } from "./ui/button";
import { useState } from "react";
import DeleteDialog from "./deleteDialog";
interface TodoProps {
  title: string;
  description: string;
  id: number;
}

export default function CardTodo({ title, description, id }: TodoProps) {
  const [isdelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const deleteHandler = () => {
    setIsDelete(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>{title}</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[160px]">
          <p className="text-xs">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <Pencil color="#24c5ff" />
            </Button>
            <Button variant="outline" onClick={deleteHandler}>
              <Trash2 color="#fa4d62" />
            </Button>
          </div>
        </CardFooter>
      </Card>
      {isdelete && (
        <DeleteDialog isDelete={isdelete} setIsDelete={setIsDelete} id={id} />
      )}
      {isEdit && (
        <EditTodos
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          id={id}
          title={title}
          description={description}
        />
      )}
    </>
  );
}
