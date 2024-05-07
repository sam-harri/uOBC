cd api
uvicorn main:app --host 0.0.0.0 --port 5001 --reload &
cd ..

cd uobc-client
npm run build
npm run dev
