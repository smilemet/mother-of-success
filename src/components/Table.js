import React, { memo, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const TableContainer = styled.table`
  thead {
    background-color: #eee;
  }

  td {
    text-align: center;
  }

  p {
    margin: 0;
  }
`;

const Table = ({ data, header, keyword }) => {
  /** props로 받아온 데이터를 인덱싱한다. */
  const modifiedData = useMemo(() => {
    return data.map((item, index) => {
      let description = setDescription(item);
      return { ...item, id: index + 1, description };
    });
  }, [data]);

  /** 초기값 입력 */
  const [list, setList] = useState(modifiedData);

  /** 검색 결과 출력 */
  useEffect(() => {
    if (!keyword) return setList(modifiedData); // 검색어 없으면 초기상태로

    let newList = modifiedData.filter((item) => {
      const { id, type, name } = item;
      const itemId = id.toString();
      const itemType = type.toLowerCase();

      if (itemId === keyword || itemType === keyword.toLowerCase() || name === keyword) return true;
      return false;
    });

    setList(newList);
  }, [keyword, modifiedData]);

  return (
    <TableContainer>
      <thead>
        <tr>
          <PrintTableHeader header={header} list={list} setList={setList} />
        </tr>
      </thead>
      <tbody>
        <PrintTableItem list={list} />
      </tbody>
    </TableContainer>
  );
};

/** 테이블 thead 생성 */
const PrintTableHeader = memo(({ header, list, setList }) => {
  return header.map((item) => {
    return (
      <th
        key={item.name}
        onClick={() => {
          let newList = [...list];
          newList.sort((a, b) => {
            let x = a[item.sort];
            let y = b[item.sort];

            if (x < y) return -1;
            else return 1;
          });

          setList(newList);
        }}
      >
        {item.name}
      </th>
    );
  });
});

/** 테이블 td 생성 */
const PrintTableItem = ({ list }) => {
  return list.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.type}</td>
        <td>{item.name}</td>
        <td>
          {item.description.map((v) => {
            return <p key={v}>{v}</p>;
          })}
        </td>
      </tr>
    );
  });
};

/** 데이터 description */
const setDescription = (data) => {
  switch (data.type) {
    case "Cherry":
    case "Apple":
    case "Orange":
    case "Cacao":
    case "Melon":
      return [
        `과일은 ${data.fruit.color}색이고 ${data.fruit.price}원입니다.`,
        `잎사귀는 ${data.leaf.color}색이고 ${data.leaf.price}원입니다.`,
      ];
    case "Bluberry":
    case "Banana":
      return [
        `과일은 ${data.fruit.color}색이고 ${data.fruit.price}원입니다.`,
        `나뭇가지는 ${data.branch.color}색이고 ${data.branch.price}원입니다.`,
      ];
    case "Sandwitch":
      return [
        `맛은 ${data.flavor.color}색이고 ${data.flavor.price}원입니다.`,
        `종이는 ${data.paper.color}색이고 ${data.paper.price}원입니다.`,
      ];
    case "Gyul":
      return [`과일은 ${data.fruit.color}색이고 ${data.fruit.price}원입니다.`];
    default:
      return [];
  }
};

export default Table;
