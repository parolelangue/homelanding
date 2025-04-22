import { IStockCode } from '@/@core/types/stockExchange';
import Card from './Card';

type Props = {
  data: IStockCode;
};

const StockCode = ({ data }: Props) => {
  // const token = localStorage.getItem('accessToken');

  // useEffect(() => {
  //   eventEmitter.emit(`emit_code_${data?.code}`, JSON.stringify(data));
  //   if (!data.code || !token) return;
  //   const socket = new SocketIO();
  //   socket.init(data.code);
  //   socket.socketInstance.on('connect', () => {});
  //   socket.socketInstance.on('notification', (ev: string) => {
  //     const parseData: { data: IStockCode[] } = ev && JSON.parse(ev);
  //     eventEmitter.emit(`emit_code_${data.code}`, parseData);
  //     // socketInstance.emit(`emit_code_${code}`, parseData);
  //   });

  //   return () => {
  //     socket.destroy();
  //     eventEmitter.removeAllListeners();
  //   };
  // }, []);


  return (
    <>
      <Card data={data} />
    </>
  );
};

export default StockCode;
