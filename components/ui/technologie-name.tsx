export const TechnologieName = ({ name }: { name: string }) => {
  return (
    <div className="py-2 px-4 whitespace-nowrap text-center border rounded-full border-muted-foreground hover:border-primary">
      {name}
    </div>
  );
};
