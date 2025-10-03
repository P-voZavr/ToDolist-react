import ToDoAdd from "../components/ToDoAdd/ToDoAdd.tsx";
import ToDoTable from "../components/ToDoTable/ToDoTable.tsx";
import PointerButtons from "../components/PointerButtons/PointerButtons.tsx";

import { useToDoStore } from "../store/useToDoStore.ts";
import { useSearchStore } from "../store/useSearchStore.ts";

function MainPage() {
  const { ToDolst } = useToDoStore();

  const { isSearch } = useSearchStore();

  return (
    <>
      <ToDoAdd />
      <ToDoTable />
      {ToDolst.length > 5 ? (
        isSearch ? (
          ToDolst.length > 5 ? (
            <PointerButtons />
          ) : null
        ) : (
          <PointerButtons />
        )
      ) : null}
    </>
  );
}

export default MainPage;
