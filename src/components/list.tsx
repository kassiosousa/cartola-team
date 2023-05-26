interface IDataProps {
  data: any;
}

export const List = ({ data }: IDataProps) => {
  return (
    <>
        {data?.map((item: any) => (
            <div key={item?.atleta_id}>
                <p>{item?.nome}</p>
                <p>{item?.apelido}</p>
            </div>
        ))}
    </>
  );
}
