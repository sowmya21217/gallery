FROM python:3.10

WORKDIR /app

EXPOSE 5050

COPY Pipfile  Pipfile.lock ./

RUN pip install pipenv==2022.9.8
RUN pipenv requirements > requirements.txt
RUN pip install -r requirements.txt

COPY . ./

CMD ["python", "main.py"]