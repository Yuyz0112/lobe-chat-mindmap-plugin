import { Button, Card } from 'antd';
import LZString from 'lz-string';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ResponseData } from '@/type';

const Render = memo<Partial<ResponseData>>(({ content }) => {
  return (
    <Flexbox width="100%">
      {/* <Flexbox distribution={'space-between'} horizontal>
        🌟心情：{mood}
        <span className={styles.date}>{dayjs(today).format('YYYY/MM/DD')}</span>
      </Flexbox>
      <Flexbox gap={8}>
        推荐衣物abc
        <Flexbox gap={12} horizontal style={{ overflow: 'scroll' }}>
          {clothes?.map((item) => (
            <Card key={item.name} size={'small'} title={item.name}>
              {item.description}
            </Card>
          ))}
        </Flexbox>
      </Flexbox> */}
      <Card>
        思维导图已生成
        <Button
          href={`https://markmap-renderer.vercel.app/?content=${LZString.compressToEncodedURIComponent(content || '')}`}
          // style={{ marginLeft: '1rem' }}
          target="_blank"
          type="link"
        >
          点击链接查看
        </Button>
      </Card>
    </Flexbox>
  );
});

export default Render;
