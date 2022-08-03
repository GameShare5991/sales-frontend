# sales-frontend
Frontend service for GameShare sales data.

## URL: http://localhost:4006/NAMEHERE
```
docker build -t sales-frontend .

docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 4006:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sales-frontend

```

# build docker
npm run build
docker build . -t jackjackzhou/sales-frontend

# push image:
docker push jackjackzhou/sales-frontend

# kubectl create&run
minikube start
kubectl create -f sales-frontend-deployment.yaml
minikube tunnel
minikube dashboard

# clean up
kubectl delete -f sales-frontend-deployment.yaml