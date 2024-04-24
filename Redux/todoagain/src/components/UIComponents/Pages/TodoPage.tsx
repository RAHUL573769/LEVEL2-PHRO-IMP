import Container from "@/components/ui/container";
import TodoContainer from "./TodoContainer";

const TodoPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    <Container>
      <h1>This is Todo Page</h1>

      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default TodoPage;
