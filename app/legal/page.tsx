import { FaLocationDot } from "react-icons/fa6";
import FotoCap from "../component/foto_caption";

export default function News() { 
    return (
    <div className="text-center w-5/6 md:w-3/4 lg:w-1/2 mx-auto tracking-wider max-w-[720px]">
            <h1 className="font-bold mt-32 text-xl md:text-2xl">特定商取引法に基づく表記</h1>
            <div className="leading-8 mt-8 md:mt-20 text-sm text-left">
            <p>販売業社の名称: 信田健斗</p>
            <p></p>
            <p>所在地:（請求があったら遅滞なく開示します）</p>
            <p>TEL: （請求があったら遅滞なく開示します）</p>
            <p>Email: kent@muyo.jp</p>
            <p>運営統括責任者: 信田健斗</p>
            <p>追加手数料等の追加料金: 配送料（商品ページに記載）、手数料（コンビニ決済）</p>
            <p>交換および返品（返金ポリシー）: 発送処理前の商品：ウェブサイトのキャンセルボタンを押すことで注文のキャンセルが可能です。
            発送処理後の商品：未開封の商品は、商品到着後 10 日以内に運営統括責任者にご連絡いただいた場合に限り、お客様の送料負担にて返金いたします。開封後の商品は、返品・交換はお受けしておりません。</p>
            <p>引渡時期: 注文は 5 営業日以内に処理され、商品は 14 日以内に到着します。</p>
            <p>決済期間: クレジットカード決済の場合はただちに処理されますが、国内の銀行振込の場合は注文から 3 日以内にお振り込みいただく必要があります。</p>
            <p>販売価格: 各商品ページに記載の金額</p>
            <p className="pb-20"></p>
            </div>
    </div>
    )
}