import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

interface DeleteDialogProps {
  isDelete: boolean;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

export default function deleteDialog({
  isDelete,
  setIsDelete,
  id,
}: DeleteDialogProps) {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/todo/${Number(id)}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setIsDelete(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      redirect("/");
    }
  };

  return (
    <>
      <Dialog open={isDelete} onOpenChange={setIsDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hapus Tugas!</DialogTitle>
          </DialogHeader>
          Apakah kamu yakin ingin menghapus tugas ini?
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDelete(false)}>
              Batal
            </Button>
            <Button onClick={handleDelete} variant="destructive">
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
