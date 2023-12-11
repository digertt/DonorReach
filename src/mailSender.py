from mailjet_rest import Client
import boto3
import sys

#Run with this commaand
#python mailSender.py ExampleEmail.txt
#First line in text file will be the subject

filename = sys.argv[1]
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('donor-email-list')
#This is dependent on being in an EC2 server with permission to read the DynamoDB table
response = table.scan()
items = response['Items'][1]['email']

msg = []

with open(filename, "r", encoding='utf-8-sig') as f:
    msg = f.read()
subject = msg.partition('\n')[0]
text = msg.partition('\n')[1:]
# Put MailJet keys here
mjKey = 'MAILJET_API_KEY'
secretKey = 'MAILJET_SECRET_KEY'

mj = Client(auth=(mjKey, secretKey))
for i in response['Items']:
	
	data = {
		'FromEmail': 'digertt@wwu.edu',
		'FromName': 'DonorReach',
		'Subject': subject,
		'Text-part': text[1],
		'Recipients': [{'Email':i['email']}]
	}
	
	res = mj.send.create(data=data)
	print(res.status_code)
	print (res.json())
