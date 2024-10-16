import "./styles.css";
import { useState, useEffect } from "react";
import { supabase } from './supabase.js';

export const Todo = () => {
  const [form, setForm] = useState({ textInputDetail: "", textInputTime: "" });
  const [records, setRecords] = useState([]);
  //[isLoading, setIsLoading]に変更 岩田
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("読み込み中です。");
  const { textInputDetail, textInputTime } = form;
  //textのエラー表示だと[textError, setTextError]の方が分かりやすいかも？
  const [textError, setTextError] = useState("");

  //ローディング処理
  useEffect(() => {
    //loadRecordに変更 岩田
    const loadData = async () => {
      setLoadingText("読み込み中です。");
      await fetchRecords();
      setLoading(false);
      setLoadingText("読み込みが完了しました。");
    };

    loadData();
  }, []);

  //supabaseのデータを取得する処理
  const fetchRecords = async () => {
    const { data, error } = await supabase
      .from('study-record')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Error fetching records:', error);
      setTextError("データの取得に失敗しました");
    } else {
      setRecords(data);
    }
  };

  //記録内容の変更であるためrecordCgangeに変更 岩田
  const  recordChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //RecordSubmitに変更 岩田
  const  recordSubmit = async () => {
    if (!textInputDetail || !textInputTime || isNaN(Number(textInputTime))) {
      setTextError("入力されていない項目があります");
      return;
    }
    
    //データの登録処理
    const { error } = await supabase
      .from('study-record')
      .insert([
        { 
          textInputDetail, 
          textInputTime: parseInt(textInputTime, 10)
        }
      ]);

    if (error) {
      console.error('Error inserting record:', error);
      setTextError("データの登録に失敗しました");
    } else {
      await fetchRecords(); 
      setForm({ textInputDetail: "", textInputTime: "" });
      setTextError("");
    }
  };

  //削除処理
  //関数名をrecordDeleteに変更
  const  recordDelete = async (id) => {
    const { error } = await supabase
      .from('study-record')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting record:', error);
      setTextError("データの削除に失敗しました");
    } else {
      await fetchRecords();
      setTextError("");
    }
  };

  //合計時間の計算処理
  const totalTime = records.reduce(
    (sum, record) => sum + record.textInputTime,
    0
  );

  //ローディング中の表示
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "white", flexDirection: "column" }}>
        <h2>loading...</h2>
        <p>{loadingText}</p>
      </div>
    );
  }

  return (
    <>
      <title data-testid="title">Hello Jest</title>
      <h1 data-testid="title">学習記録一覧</h1>
      <div>
        <div>
          <label>
            <span>学習内容</span>
            <input
              name="textInputDetail"
              type="text"
              placeholder="内容"
              value={textInputDetail}
              onChange={ recordChange}
            />
          </label>
        </div>
        <div>
          <label>
            <span>学習時間</span>
            <input
              name="textInputTime"
              type="number"
              min="0"
              placeholder="時間"
              value={textInputTime}
              onChange={ recordChange}
            />
          </label>
        </div>
        <div style={{ color: "skyblue" }}>
          <p> &nbsp;&nbsp;入力されている学習内容：{textInputDetail}</p>
          <p> &nbsp;&nbsp;入力されている学習時間：{textInputTime}時間</p>
        </div>
      </div>
      <div>
        {records.map(({ id, textInputDetail, textInputTime }, index) => (
          <div key={id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <p style={{ margin: 0 }}>
              {`【記録${index + 1}】${textInputDetail}`}
              <span
                style={{ borderBottom: "1px solid black", marginLeft: "20px" }}
              >{`${textInputTime}時間`}</span>
            </p>
            <button 
              onClick={() =>  recordDelete(id)}
              style={{ marginLeft: "20px",  border: "none", padding: "5px 10px", cursor: "pointer" }}
            >
              削除
            </button>
          </div>
        ))}
      </div>
      <button onClick={ recordSubmit}>登録</button>
      <p>{textError && <span style={{ color: "red" }}>{textError}</span>} </p>
      <p>合計時間: {totalTime}/1000（h）</p>
    </>
  );
};
//TODO: 後ほど、CSSを別ファイルに切り出します
