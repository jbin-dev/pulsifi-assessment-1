import Firebase from "./index";

const db = Firebase.firestore(Firebase);

export async function add(collection, data) {
  return db.collection(collection).add(data);
}

export async function getSingle(collection, docId) {
  const ref = await db.collection(collection).doc(docId);
  const doc = await ref.get();
  if (!doc.exists) {
    throw new Error("Not Exists");
  }

  return doc.data();
}

export async function get(collection, queries) {
  // queries need extra handling
  let ref = db.collection(collection);

  if (queries) {
    queries.forEach((query) => {
      const { field, condition, value } = query;
      ref = ref.where(field, condition, value);
    });
  }

  const snapshot = await ref.get();
  if (snapshot.empty) {
    throw new Error("Empty");
  }

  const data = [];
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}
