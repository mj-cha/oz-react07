// 메뉴 카드 하나 — 「담기」를 누르면 props로 받은 함수(onAdd)를 불러 App에 알립니다
// [주문 카드] onAdd = 계산대(App)에서 받은 「담기」 함수
function MenuCard({ name, price, desc = "오늘의 메뉴", onAdd }) {
  return (
    <article className="menu-card">
      <h3>{name}</h3>
      <p className="price">{price}원</p>
      <p className="desc">{desc}</p>
      {/* [TODO 6: onAdd] 이름만 넘김 (괄호 X) → 누를 때 계산대에 알림 */}
      <button type="button" onClick={onAdd}>
        담기
      </button>
    </article>
  );
}

export default MenuCard;


[담기 한 번의 흐름]
┃
┣━━ 1) 카드 「담기」 클릭 ──> onAdd() = App의 handleAdd()
┣━━ 2) App: setCount(count + 1) ──> 장부 0 → 1 ──> App 다시 그림
┣━━ 3) Header count={1} ──> 「담은 메뉴 1개」
┗━━ 4) count가 바뀜 ──> useEffect 실행 ──> 탭 제목 「(1) 오즈 카페」
    ✓ 채운 코드로 npm run build 통과 확인