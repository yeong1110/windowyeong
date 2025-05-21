import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
	onSnapshot,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt?: Timestamp;
}

export default function GuestbookList() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as GuestbookEntry[];

      setEntries(docs);
    });

    // 컴포넌트 언마운트 시 리스너 정리
    return () => unsubscribe();
  }, []);

  return (
    <ul className="wy__visit__lists">
      {entries.map((entry) => (
        <li key={entry.id} className="wy__visit__list">
          <div className="wy__visit__list__top">
            <p>{entry.name}</p>
            <p>
              {entry.createdAt?.toDate
                ? entry.createdAt.toDate().toLocaleString()
                : "날짜 없음"}
            </p>
          </div>
          <div className="wy__visit__list__bottom">
            <p>{entry.message}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
